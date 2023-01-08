/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './chemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async registerUser(user: CreateUserDto): Promise<User> {
    const existingUser = await this.usersService.findOne(user.login);
    if (existingUser) {
      console.log('user already exist');
      // TODO
    } else {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(user.password, salt);
      const createdUser = this.usersService.createUser(user, hash);
      return createdUser.save();
    }
  }

  async loginUser(user: any) {
    const existingUser = await this.usersService.findOne(user.login);
    if (existingUser) {
      const isMatch = await bcrypt.compare(
        user.password,
        existingUser.password,
      );
      if (isMatch) {
        const payload = { username: user.login, sub: existingUser._id };
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
