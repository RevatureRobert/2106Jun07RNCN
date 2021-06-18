import { Router } from 'express';
//import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import * as cRoute from './Characters';

// User-route
const appRouter = Router();
//appRouter.get('/all', getAllUsers);
//appRouter.post('/add', addOneUser);
//appRouter.put('/update', updateOneUser);
//appRouter.delete('/delete/:id', deleteOneUser);
appRouter.get('/all', cRoute.getAllCharacters);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/rpg', appRouter);
export default baseRouter;
