import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import { MemeDataBase } from './dynamoDB/dynamoDB';
import MemeDao from '@daos/Memes/MemeDao';
import IMemes from '@entities/Memes';
import { seedData } from './dynamoDB/seed';


// Start the server
const port = Number(process.env.PORT || 3000);
const memeDB = new MemeDataBase();
const memeDao = new MemeDao(memeDB);
seedData();

app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});

app.get('/all_memes/', async(req, res)=>{
    try{
        const meme:any = await memeDao.getAll();
        res.json(meme);
    }catch(error){
        console.error('app.get');
        res.status(500).json({err: 'Somthing bad happend in app.get-all'})
    }
});

app.get('/all_memes/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const meme:any = await memeDao.getOne(parseInt(id));
        res.json(meme);
    }catch(error){
        console.error('app.get');
        res.status(500).json({err: 'Somthing bad happend in app.get'})
    }
});

