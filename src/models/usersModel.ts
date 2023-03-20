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
export = { createUserModel };