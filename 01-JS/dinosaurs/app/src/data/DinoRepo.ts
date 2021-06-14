// importing a module from node_modules or node core modules, use just the name
import * as fs from "fs";
import * as path from "path";
import { Dinosaur } from "../model/Dinosaur";
const FILE_NAME = path.resolve("./db/dino.json", "../../db/dino.json");

export let db:Dinosaur[] = [];

/*
truthy and falsey values
    falsey:
        0, false, "", undefined, null, NaN
*/

export function writeArray():void {
  fs.writeFile(FILE_NAME, JSON.stringify(db), (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("The file was written to");
  });
}

export function loadData(): void {
  fs.readFile(FILE_NAME, (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("the data has been retrieved");
    db = JSON.parse(data.toString());
  });
}

export async function loadPromisedData():Promise<void> {
  try{
    const str = await fs.promises.readFile(FILE_NAME, { encoding: "utf-8" });
    db = JSON.parse(str);
  } catch(error){
      console.error(error);
  }
}
