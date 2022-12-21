import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop({ unique: true })
  categoryName: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
