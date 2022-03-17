import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("Should be able to list all availabe cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 110,
      license_plate: "EFGH5678",
      fine_amount: 40,
      brand: "Car brand",
      category_id: "category_id",
    });

    // Criar mais um carro com available false

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car description",
      daily_rate: 110,
      license_plate: "EFGH5678",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car description",
      daily_rate: 110,
      license_plate: "EFGH5678",
      fine_amount: 40,
      brand: "Car_brand_test2",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 4",
      description: "Car description",
      daily_rate: 110,
      license_plate: "EFGH5678",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    await carsRepositoryInMemory.create({
      name: "Car 5",
      description: "Car description",
      daily_rate: 110,
      license_plate: "EFGH5678",
      fine_amount: 40,
      brand: "Car_brand_test2",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 4",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 6",
      description: "Car description",
      daily_rate: 110,
      license_plate: "EFGH5678",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id_1",
    });

    await carsRepositoryInMemory.create({
      name: "Car 7",
      description: "Car description",
      daily_rate: 110,
      license_plate: "EFGH5678",
      fine_amount: 40,
      brand: "Car_brand_test2",
      category_id: "category_id_2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id_1",
    });

    expect(cars).toEqual([car]);
  });
});
