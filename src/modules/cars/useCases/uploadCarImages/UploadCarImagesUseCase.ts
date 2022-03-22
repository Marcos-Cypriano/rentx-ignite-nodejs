import { inject, injectable } from "tsyringe";

import { ICarsImagesRespository } from "@modules/cars/repositories/ICarsImagesRespository";
import { AppError } from "@shared/errors/AppError";
import { deleteFile } from "@utils/file";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImageRepository: ICarsImagesRespository
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    // Criar uma validação que compara as imagens do banco e do upload
    const carImages = await this.carsImageRepository.findById(car_id);

    const delFileName = [];
    if (carImages.length > 0) {
      for (let i = 0; i < carImages.length; i++) {
        for (let j = 0; j < images_name.length; j++) {
          const [, carImage] = carImages[i].image_name.split("-");
          const [, fileImage] = images_name[j].split("-");

          if (carImage === fileImage) {
            delFileName.push(images_name[j]);
            delFileName.push(fileImage);
          }
        }
      }
    }

    if (delFileName.length > 0) {
      await deleteFile(`./tmp/cars/${delFileName[0]}`);
      throw new AppError(`Image ${delFileName[1]} already exists!`);
    }

    images_name.map(async (image) => {
      await this.carsImageRepository.create(car_id, image);
    });
  }
}

export { UploadCarImagesUseCase };
