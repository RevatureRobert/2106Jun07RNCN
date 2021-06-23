import { Router } from 'express';
import { getItem, addItem, getAll, deleteDrop, updateDrop } from './genDrops'

const DropRouter = Router();
DropRouter.get('/getOne', getItem);
DropRouter.get('/getAll', getAll);
DropRouter.post('/add', addItem);
DropRouter.delete('/dropped', deleteDrop);
DropRouter.put('/update', updateDrop);

const route = Router();
route.use('/', DropRouter);
export default route;