import express from 'express';
import productsController from './controllers/productsController';
// Inicio
const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

// console.log('app');
app.post('/products', productsController.createProductController);

app.get('/products', productsController.getAllProductsController);

export default app;
