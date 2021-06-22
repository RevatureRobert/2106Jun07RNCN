import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import MemeDao from '@daos/Memes/MemeDao';
//import { seedData, testDelete, testGetOne, testGetRandom } from './dynamoDB/seed';


// Start the server
const port = Number(process.env.PORT || 3000);
const memeDao = new MemeDao();
//testGetRandom();
//testGetOne();
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});


