import connection from './connection';

const getAllOrdersModel = async (): Promise<Array<object>> => {
  const [rows] = await connection
    .execute(`SELECT orders.id, orders.user_id AS userId,
      JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.orders AS orders
      INNER JOIN Trybesmith.products AS products
      ON orders.id = products.order_id
      GROUP BY orders.id
      ORDER BY orders.id;`);
  
  return rows as Array<object>;
};
export = { getAllOrdersModel };