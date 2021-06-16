//import * as repo from "./src/data/DinoRepo.js";
// import { Dinosaur } from "./src/model/Dinosaur.js";
// import * as http from "http";

// const server: http.Server = http.createServer(
//   async (req: http.IncomingMessage, res: http.OutgoingMessage) => {
//     // send back json, this is for when a request gets received
//     await repo.loadPromisedData();
//     // res.send(repo.db)
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify(repo.db));
//     res.end();
//   }
// );

// server.listen(3000, () => {
//   console.log("listening on port 3000");
// });
// // async function program() {
// //     await repo.loadPromisedData()
// //     console.log(repo.db);

// // }
// // program();

// // if(NaN){
// //     console.log(true);
// // } else {
// //     console.log(false);
// // }

// // repo.db.push(new Dinosaur('dinosawr', 'herbivore','stegosaurs', 'paleo',6000.0002, 'forest'));
// // repo.db.push(new Dinosaur('grumpy','carnivore','t-rex','4000 years ago, in a galaxy far far near', 'enough to break the ice', 'forest'));
// // console.log(repo.db);
// // repo.writeArray();
// // console.log(__dirname); // can be used to retrieve the absolute path

// // repo.loadData();
// // console.log(repo.db);
