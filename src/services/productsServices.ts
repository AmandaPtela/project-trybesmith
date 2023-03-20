import IProduct from '../interfaces/IProduct';
import ProductModel from '../models/productsModel';

const createProductService = async (product: IProduct): Promise<IProduct> => {
  const products = await ProductModel.createProductModel(product);
  return products;
};

const getAllService = async (): Promise<Array<object>> => {
  const products = await ProductModel.getAllModel();
  return products;
};
export = { createProductService, getAllService };