import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Car",
      description: "Car description",
      daily_rate: 100,
      license_plate: "ABC123",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("Should not be able to create an existing license_plate car", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car",
        description: "Car description",
        daily_rate: 100,
        license_plate: "ABC123",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Car 2",
        description: "Car 2 description",
        daily_rate: 100,
        license_plate: "ABC123",
        fine_amount: 60,
        brand: "Brand 2",
        category_id: "category 2",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to create an available new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Available car",
      description: "Car description",
      daily_rate: 100,
      license_plate: "ABCD1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
