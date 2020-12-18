import { Router } from 'express';
import todoController from './config/todo/todoController';

const routes = Router();

routes.get('/api', todoController.index);
routes.post('/api', todoController.add);
routes.post('/api/:id', todoController.update);
routes.delete('/api/:id', todoController.remove);
routes.get('/api/:id', todoController.findOne);

export default routes;