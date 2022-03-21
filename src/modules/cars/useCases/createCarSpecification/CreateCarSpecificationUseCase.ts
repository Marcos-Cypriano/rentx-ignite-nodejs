import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exists!");
    }

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id
    );

    // Criar uma melhor solução para adicionar apenas as especificações novas.
    for (let i = 0; i < specifications.length; i++) {
      for (let j = 0; j < carExists.specifications.length; j++) {
        if (specifications[i].id === carExists.specifications[j].id) {
          throw new AppError(
            `Specification '${specifications[i].name}' already exists in this car!`
          );
        }
      }
    }
    const newSpecifications = [...carExists.specifications, ...specifications];
    carExists.specifications = newSpecifications;

    await this.carsRepository.create(carExists);

    return carExists;
  }
}

export { CreateCarSpecificationUseCase };
