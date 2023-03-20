import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

const createProductModel = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const productName: string = name;
  const productAmount: string = amount;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
    `, [name, amount]);
  
  return { id: insertId, name: productName, amount: productAmount };
};

const getAllModel = async (): Promise<Array<object>> => {
  const [rows] = await connection
    .execute('SELECT * FROM Trybesmith.products');
  
  return rows as Array<object>;
};
export = { createProductModel, getAllModel };