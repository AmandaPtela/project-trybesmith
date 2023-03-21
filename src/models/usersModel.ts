import connection from './connection';
import IUser from '../interfaces/IUser';

const createUserModel = async (user: IUser): Promise<IUser> => {
  const { username, level, vocation, password } = user;
  await connection
    .execute(`
    INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES ('${username}', '${vocation}', ${level}, '${password}');`);
  
  return { username, level, vocation, password } as IUser;
};

const loginModel = async (user: IUser): Promise<Array<object>> => {
  const { username } = user;
  const loginOk = await connection
    .execute(`SELECT password FROM Trybesmith.users WHERE (username = '${username}');`);
  
  return loginOk;
};

export = { createUserModel, loginModel };