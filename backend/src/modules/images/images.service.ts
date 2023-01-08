import { Injectable } from '@nestjs/common';
import { Image, ImageDocument } from './chemas/images.schema';
import { AddImageDto } from './dto/add-image.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}

  async addImages(images: AddImageDto[]): Promise<Image> {
    const addedImages = new this.imageModel(images);
    console.log(addedImages);
    return addedImages.save();
  }

  async getImagesByCategoryId(): Promise<Image[]> {
    // return this.imageModel.findById(categoryId)
    return this.imageModel.find().exec();
  }
}
