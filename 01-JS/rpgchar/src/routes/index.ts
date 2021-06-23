import { Router } from 'express';
//import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import * as cRoute from './Characters';

// User-route
const appRouter = Router();
//appRouter.get('/all', getAllUsers);
//appRouter.post('/add', addOneUser);
//appRouter.put('/update', updateOneUser);
//appRouter.delete('/delete/:id', deleteOneUser);
appRouter.get('/char/all', cRoute.getAllCharacters);
appRouter.post('/char/add', cRoute.addOrUpdateChar);
appRouter.put('/char/update', cRoute.addOrUpdateChar);
appRouter.put('/char/level/:char&:exp', cRoute.levelChar);
appRouter.get('/char/:id', cRoute.getChar);
appRouter.delete('/char/delete/:id', cRoute.deleteChar);
appRouter.get('/player/:player', cRoute.getCharacterbyPlayer);
appRouter.get('/location/:loc', cRoute.getCharacterbyLocation);
// Export the base-router
const baseRouter = Router();
baseRouter.use('/rpg', appRouter);
export default baseRouter;
