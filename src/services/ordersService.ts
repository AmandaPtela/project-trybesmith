import ordersModel from '../models/ordersModel';

const getAllOrdersService = async (): Promise<Array<object>> => {
  const orders = await ordersModel.getAllOrdersModel();
  return orders;
};

export = { getAllOrdersService };