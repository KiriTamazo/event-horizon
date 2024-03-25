"use server";

import { CreateCategoryParams } from "@/types";
import { handleError, parseResponse } from "../utils";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";

export const getAllCategories = async () => {
  try {
    await connectToDatabase();
    const newCategory = await Category.find();
    return parseResponse(newCategory);
  } catch (error) {
    handleError(error);
  }
};

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectToDatabase();
    const newCategory = await Category.create({
      name: categoryName,
    });
    return parseResponse(newCategory);
  } catch (error) {
    handleError(error);
  }
};
