import { Router } from 'express';
import { getItem, addOrUpdate, getAll, deleteDrop } from './genDrops'

const DropRouter = Router();
DropRouter.get('/item', getItem);
DropRouter.get('/getAll', getAll);
DropRouter.post('/item', addOrUpdate);
DropRouter.put('/item', addOrUpdate);
DropRouter.delete('/delete/:dropName', deleteDrop);

const route = Router();
route.use('/', DropRouter);
export default route;