import { Request, Response } from 'express';
import usersService from '../services/usersService';

const createUserController = async (request: Request, response: Response) => {
  const user = await usersService.createUserService(request.body);
  console.log(user);
  
  return response.status(201).json({ token: user });
};

const loginController = async (request: Request, response: Response) => {
  const user = await usersService.loginService(request.body);
  
  if (user.includes('password')) {
    return response.status(400).json({ message: '"password" is required' });
  }
  if (user.includes('username')) {
    return response.status(400).json({ message: '"username" is required' });
  }
  return response.status(200).json({ token: user });
};

export = { createUserController, loginController };