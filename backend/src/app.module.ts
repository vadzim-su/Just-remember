import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './config';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [
    AuthModule,
    CategoriesModule,
    ImagesModule,
    MongooseModule.forRoot(MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
