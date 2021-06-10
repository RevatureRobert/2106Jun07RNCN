import * as repo from './src/data/DinoRepo.js'
// import {Dinosaur} from './src/model/dinosaur.js'
import * as http from 'http';

const server = http.createServer( async (req, res) => {
  // send back json, this is for when a request gets received
  await repo.loadPromisedData();
  res.setHeader("Content-Type", "application/json");
  res.write(repo.db);
  res.end();
});

server.listen(3000, () =>{
  console.log('listening on port 3000');
});

// async function program(){
//   await repo.loadPromisedData();
//   console.log(repo.db);
// }

// program();