import ProductsInterface from '../interfaces/productsInterface';
import ProductModel from '../models/productsModel';

async function createProductService(product: ProductsInterface): Promise<ProductsInterface> {
  const products = await ProductModel.createProductModel(product);
  return products;
}
export = { createProductService };