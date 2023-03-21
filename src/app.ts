import express from 'express';
import ordersController from './controllers/ordersController';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
// Inicio
const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

// console.log('app');
app.post('/products', productsController.createProductController);

app.get('/products', productsController.getAllProductsController);

app.post('/users', usersController.createUserController);

app.get('/orders', ordersController.getAllOrdersController);

app.post('/login', usersController.loginController);

export default app;
