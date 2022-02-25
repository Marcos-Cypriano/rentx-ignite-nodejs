import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCatgoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRespository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRespository);
const listCategoriesController = new ListCatgoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
