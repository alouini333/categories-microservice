import { Category } from "src/types/categoryTypes";
import * as CategoryModel from '../models/categoryModel';

export const getAllCategoriesService = async (): Promise<Category[]> => {
    try {
      const categories = await CategoryModel.findAllCategories();
      return categories;
    } catch (err) {
      throw err;
    }
  };