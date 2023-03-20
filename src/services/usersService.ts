import IUser from '../interfaces/IUser';
import usersModel from '../models/usersModel';
import generateToken from '../Utils/generateToken';

const createUserService = async (user: IUser): Promise<string> => {
  await usersModel.createUserModel(user);
  const token = generateToken(user);
  return token;
};

export = { createUserService };