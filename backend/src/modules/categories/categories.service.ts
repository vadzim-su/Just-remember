import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './chemas/category.schema';
import { CreateCategotyDto } from './dto/create-category.dto';
import { Model } from 'mongoose';
import { UpdateCategotyDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getCategoryById(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  async createCategory(category: CreateCategotyDto): Promise<Category> {
    const createdCategory = new this.categoryModel(category);
    return createdCategory.save();
  }

  async removeCategory(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndRemove(id);
  }

  async updateCategory(
    id: string,
    category: UpdateCategotyDto,
  ): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, category, {
      new: true,
    });
  }
}
