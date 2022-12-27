/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './chemas/user.schema';
import { Model } from 'mongoose';
import { UserSchema } from './chemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
   // private usersService: UsersService,
  )
  {}

  async registerUser(user: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ login: user.login });
    if (existingUser) {
      console.log('user already exist');
      // TODO
    } else {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(user.password, salt);
      const createdUser = new this.userModel({ ...user, password: hash });
      return createdUser.save();
    }
  }

  async loginUser(user: any) {
    const existingUser = await this.userModel.findOne({ login: user.login });
    if (existingUser) {
      const isMatch = await bcrypt.compare(
        user.password,
        existingUser.password,
      );
      if (isMatch) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: `Bearer ${this.jwtService.sign(payload)}`,
        };
      } else {
        console.log('passwords are not the same');
        // TODO
      }
    } else {
      console.log('user not found');
      // TODO
    }
  }
}
