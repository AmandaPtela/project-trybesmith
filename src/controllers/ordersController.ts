import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrdersController = async (_request: Request, response: Response) => {
  const orders = await ordersService.getAllOrdersService();
  
  return response.status(200).json(orders);
};
export = { getAllOrdersController };