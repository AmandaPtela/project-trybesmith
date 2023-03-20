import { Request, Response } from 'express';
import ProductsService from '../services/productsServices';

const createProductController = async (request: Request, response: Response) => {
  const product = request.body;
  const products = await ProductsService.createProductService(product);
  console.log(product);
  return response.status(201).json(products);
};

export = { createProductController };