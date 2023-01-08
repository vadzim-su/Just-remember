import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Image } from './chemas/images.schema';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  // @Post('upload')
  // @UseInterceptors(FilesInterceptor('files'))
  // uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   return this.imagesService.addImages(files);
  // }

  @Get()
  getImagesByCategoryId(): Promise<Image[]> {
    return this.imagesService.getImagesByCategoryId();
  }

  @Post('file')
  uploadFileAndPassValidation(
    @Body() body: any, //TODO
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return {
      body,
      file: file.buffer.toString(),
    };
  }
}
