import { Router } from 'express';
//import { addItem, deleteItem, getItem, updateItem } from './genDrops';
import { getItem, addItem } from './genDrops'

const DropRouter = Router();
DropRouter.get('/getOne', getItem);
DropRouter.post('/add', addItem);


//DropRouter.put('/update', updateItem);
//DropRouter.delete('/delete', deleteItem);

const route = Router();
route.use('/', DropRouter);
export default route;