import { ResultSetHeader } from 'mysql2';
import ProductsInterface from '../interfaces/productsInterface';
import connection from './connection';

const createProductModel = async (product: ProductsInterface): Promise<ProductsInterface> => {
  const { name, amount } = product;
  const productName: string = name;
  const productAmount: string = amount;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
    `, [name, amount]);
  
  return { id: insertId, name: productName, amount: productAmount };
};
export = { createProductModel };