import express from 'express';
import * as repo from './src/data/DinoRepo'
const app = express();
repo.loadPromisedData();

app.get('/dino', (req, res, next) => {
  res.send(repo.db);
})

app.listen(3000, () => {
  console.log('the server is listening and active');
})


