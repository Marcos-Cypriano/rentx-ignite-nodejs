import { injectable, inject } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  category_id?: string;
  name?: string;
  brand?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ name, brand, category_id }: IRequest): Promise<Car[]> {
    if (name || brand || category_id) {
      const cars = await this.carsRepository.findAvailableBy(
        brand,
        category_id,
        name
      );

      if (cars.length === 0) {
        if (brand) {
          throw new AppError(`There is no ${brand} car available!`);
        }
        if (name) {
          throw new AppError(`There is no ${name} car available!`);
        }
        if (category_id) {
          throw new AppError(`There is no ${category_id} car available!`);
        }
      }
      return cars;
    }

    const cars = await this.carsRepository.findAllAlvailable();
    return cars;
  }
}

export { ListAvailableCarsUseCase };
