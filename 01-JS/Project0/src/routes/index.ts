import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import { getAllMemes, addOneMeme, updateOneMeme, deleteOneMeme, getRandomMeme } from './Memes';


// User-route
const userRouter = Router();
userRouter.get('/all_users', getAllUsers);
userRouter.post('/add_user', addOneUser);
userRouter.put('/update_user', updateOneUser);
userRouter.delete('/delete_user/:id', deleteOneUser);

//Meme-Routes
const memeRouter = Router();
memeRouter.get('/all_memes', getAllMemes);
memeRouter.get('/random_meme/:type', getRandomMeme)
memeRouter.post('/add_meme', addOneMeme);
memeRouter.patch('/update_meme', updateOneMeme);
memeRouter.delete('/delete_meme/:id', deleteOneMeme);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/memes', memeRouter);

export default baseRouter;
