import { Router } from 'express';
import { getItem, addOrUpdate, getAll, deleteDrop } from './genDrops'

const DropRouter = Router();
DropRouter.get('/', getItem);
DropRouter.get('/all', getAll);
DropRouter.post('/', addOrUpdate);
DropRouter.put('/', addOrUpdate);
DropRouter.delete('/:dropName', deleteDrop);

const route = Router();
route.use('/monsterDrop', DropRouter);
export default route;