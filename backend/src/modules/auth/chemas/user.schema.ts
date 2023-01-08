import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  login: string;

  @Prop({ required: true })
  password: string;

  @Prop({ unique: true })
  nickName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
