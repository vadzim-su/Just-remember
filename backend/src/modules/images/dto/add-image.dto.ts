export class AddImageDto {
  // readonly categoryId: string;
  // readonly imageName: string;

  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
