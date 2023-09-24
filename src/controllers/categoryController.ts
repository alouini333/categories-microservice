import { NextFunction, Request, Response } from 'express';
import * as categoryService from '../services/categoryService';

// Due to time pressue the categories will be hardcoded
export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const categories = await categoryService.getAllCategoriesService();
    res.status(200).json({
      status: 'success',
      data: categories,
    });
  } catch (err) {
    next(err);
  }
};