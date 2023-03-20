import { Request, Response } from 'express';
import usersService from '../services/usersService';

const createUserController = async (request: Request, response: Response) => {
  const user = await usersService.createUserService(request.body);
  console.log(user);
  
  return response.status(201).json({ token: user });
};
export = { createUserController };