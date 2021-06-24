import express from 'express';
import route from './routes/route';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/genshin', route);

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
    console.log('Listening: ' + port);
});