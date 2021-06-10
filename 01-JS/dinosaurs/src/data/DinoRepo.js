/*
 * Importing a module from node_modules or node core modules, use just the name
 * of the module.
 */
import * as fs from 'fs';
import * as path from 'path';
const FILE_NAME = path.resolve('./db/dino.json', '../../db/dino.json');

export let db = [{},{},{}];

export function writeArray(){
  fs.writeFile(FILE_NAME, JSON.stringify(db), (err) => {
    if(err){
      console.error(err.message);
      return;
    }
    console.log('The file was written to')
  });
}

export async function loadPromisedData(){
  try{
    db = await fs.promises.readFile(FILE_NAME, {encoding: 'utf-8'});
  } catch(err){
    console.error(err);
  }
}