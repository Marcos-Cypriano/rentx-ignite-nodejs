import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  /**
   * SOLID - D - Dependency Inversion Principle - a classe não precisa saber quem é o repositório (constructor que fez isso)
   * SOLID - L - Liskov Substitution Principle - ao chamar a ICategoriesRespository eu fico livre para altear o meu relacionamento com o DB,
   * contanto que ele seja um subtipo da categoria. Exemplo: em categories.routes.ts eu posso importar tanto CategoriesRepository quanto o
   * PostgresCategoriesRepository, pois ambas implementam a ICategoriesRepository. Isso não irá gerar problema aqui.
   */
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
