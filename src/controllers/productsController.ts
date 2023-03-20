import { Request, Response } from 'express';
import ProductsService from '../services/productsServices';

const createProductController = async (request: Request, response: Response) => {
  const product = await ProductsService.createProductService(request.body);
  return response.status(201).json(product);
};

const getAllProductsController = async (_request: Request, response: Response) => {
  const products = await ProductsService.getAllService();
  console.log(products);
  return response.status(200).json(products);
};

export = { createProductController, getAllProductsController };