import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImageDocument = HydratedDocument<Image>;

@Schema()
export class Image {
  @Prop()
  categoryId: string;
  @Prop({ unique: true })
  originalname: string;
  @Prop({ unique: true })
  size: number;

  // fieldname: string;
  // originalname: string;
  // encoding: string;
  // mimetype: string;
  // buffer: Buffer;
  // size: number;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
