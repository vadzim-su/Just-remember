import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './chemas/category.schema';
import { CreateCategotyDto } from './dto/create-category.dto';
import { UpdateCategotyDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAllCategories(): Promise<Category[]> {
    return this.categoriesService.getAllCategories();
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.getCategoryById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCategory(@Body() category: CreateCategotyDto): Promise<Category> {
    return this.categoriesService.createCategory(category);
  }

  @Delete(':id')
  removeCategory(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.removeCategory(id);
  }

  @Put(':id')
  updateCategory(
    @Body() category: UpdateCategotyDto,
    @Param('id') id: string,
  ): Promise<Category> {
    return this.categoriesService.updateCategory(id, category);
  }
}
