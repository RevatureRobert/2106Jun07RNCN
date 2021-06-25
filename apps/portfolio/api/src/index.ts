import express from 'express';
import cors from 'cors';
const app = express();
const routes = express.Router();

app.use(cors())
routes.get('/tv', (req, res, next) => {
    res.send(JSON.stringify({
        type: 'tube',
        brand: 'vizio',
        screenSize: 44
    }))
})
app.use(routes)

app.listen(3000, () => {
    console.log('we are running')
})