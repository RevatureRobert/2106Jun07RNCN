import * as repo from './src/data/DinoRepo.js'
import * as http from 'http';

const server: http.Server = http.createServer( 
  async (req: http.IncomingMessage, res: http.OutgoingMessage) => {
    // send back json, this is for when a request gets received
    await repo.loadPromisedData();
    res.setHeader("Content-Type", "application/json");
    res.write(repo.db);
    res.end();
});

server.listen(3000, () =>{
  console.log('listening on port 3000');
});