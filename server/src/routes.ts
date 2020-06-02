import { Router } from 'express';
import knex from './database/connect';

import PointsController from './controllers/pointsController';
import ItemController from './controllers/itemController';

const routes = Router();

routes.get('/items', ItemController.index);
routes.get('/points/', PointsController.index);
routes.get('/points/:id', PointsController.show);

routes.post('/points', PointsController.create);

export default routes;