import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCatgoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(req: Request, res: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return res.json(all);
  }
}

export { ListCatgoriesController };
