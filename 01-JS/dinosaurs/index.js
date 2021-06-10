import * as repo from './src/data/DinoRepo.js'
import { Dinosaur } from './src/model/Dinosaur.js';
//* retrieved from nodejs documentation: https://nodejs.org/docs/latest-v12.x/api/esm.html#esm_no_require_exports_module_exports_filename_dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);console.log("entry point");

// if(NaN){
//     console.log(true);
// } else {
//     console.log(false);
// }

// repo.db.push(new Dinosaur('dinosawr', 'herbivore','stegosaurs', 'paleo',6000.0002, 'forest'));
// repo.db.push(new Dinosaur('grumpy','carnivore','t-rex','4000 years ago, in a galaxy far far near', 'enough to break the ice', 'forest'));
// console.log(repo.db);
// repo.writeArray();
// console.log(__dirname); // can be used to retrieve the absolute path


// repo.loadData();
// console.log(repo.db);

repo.loadPromisedData().then(data => {
    // repo.db = data;
    console.log(data);
})