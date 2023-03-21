import IUser from '../interfaces/IUser';
import usersModel from '../models/usersModel';
import generateToken from '../Utils/generateToken';

const createUserService = async (user: IUser): Promise<string> => {
  await usersModel.createUserModel(user);
  const token = generateToken(user);
  return token;
};

const loginService = async (user: IUser): Promise<string> => {
  const { username, password } = user;
  if (!username) return ('username');
  if (!password) return ('password');
  const validateUser = await usersModel.loginModel(user);
  const arraay = Object.values(validateUser[0]);
  
  if (!arraay.includes(password)) return ('invalid password');
  
  const token = generateToken(user);
  return token;
};

export = { createUserService, loginService };