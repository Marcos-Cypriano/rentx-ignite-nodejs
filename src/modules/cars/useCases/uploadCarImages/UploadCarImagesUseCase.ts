import { inject, injectable } from "tsyringe";

import { ICarsImagesRespository } from "@modules/cars/repositories/ICarsImagesRespository";

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
    // Criar um teste para verificar se a imagem já está no banco de dados do carro
    images_name.map(async (image) => {
      await this.carsImageRepository.create(car_id, image);
    });
  }
}

export { UploadCarImagesUseCase };
