import { Repository, getRepository } from "typeorm";

import { ICarsImagesRespository } from "@modules/cars/repositories/ICarsImagesRespository";

import { CarImage } from "../entities/CarImage";

class CarsImagesRespository implements ICarsImagesRespository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({ car_id, image_name });

    await this.repository.save(carImage);

    return carImage;
  }

  async findById(car_id: string): Promise<CarImage[]> {
    const cars = this.repository.find({ car_id });

    return cars;
  }
}

export { CarsImagesRespository };
