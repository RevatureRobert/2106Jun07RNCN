import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';


// User-route
const userRouter = Router();
userRouter.get('/all_users', getAllUsers);
userRouter.post('/add_user', addOneUser);
userRouter.put('/update_user', updateOneUser);
userRouter.delete('/delete_user/:id', deleteOneUser);

//Meme-Routes
const memeRouter = Router();
memeRouter.get('/all_memes', getAllUsers);
memeRouter.post('/add_meme', addOneUser);
memeRouter.put('/update_meme', updateOneUser);
memeRouter.delete('/delete_meme/:id', deleteOneUser);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
export default baseRouter;
