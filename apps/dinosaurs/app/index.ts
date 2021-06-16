import express from 'express';
import { clearConfigCache } from 'prettier';
import * as repo from './src/data/DinoRepo.js';

const app = express();
repo.loadPromisedData();

app.get('/dino', (req, res, next) => {
  res.send(repo.db);
})

app.listen(3000, () => {
  console.log("The server is listening and active.");
});