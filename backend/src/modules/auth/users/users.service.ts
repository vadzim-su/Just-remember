import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './../chemas/user.schema';
import { CreateUserDto } from './../dto/create-user.dto';

export type ExistedUser = any;

@Injectable()
export class UsersService {
  private readonly users = [];

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(login: string): Promise<ExistedUser | undefined> {
    return await this.userModel.findOne({ login });
  }

  public createUser(user: CreateUserDto, hash: string) {
    return new this.userModel({ ...user, password: hash });
  }
}
