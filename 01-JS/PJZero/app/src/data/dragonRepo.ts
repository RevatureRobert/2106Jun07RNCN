// Necessary imports
import * as fs from "fs";
import * as path from "path";
import { dragon } from "../model/dragonObject";                                 // Imports dragon object
const FILE_NAME = path.resolve("./db/dragon.json", "../../db/dragon.json");     // Deterimes file name and location for database

export let db:dragon[] = [];                                                    // Under alias "db", creates an array of dragon objects. These will be filled later.

// Saves the current database to a file, optionally with a custom file location.
export function writeArray(customFileLocation?: String): void {
    fs.writeFile(FILE_NAME, JSON.stringify(db), (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("File was written to " + FILE_NAME);
    });
}

// Loads a dragons file, optionally from a custom file location.
export async function loadPromisedData():Promise<void> {
    try {
        const PROMISE_RETURN = await fs.promises.readFile(FILE_NAME, { encoding: "utf-8"});
        db = JSON.parse(PROMISE_RETURN);
    } catch(error) {
        console.error(error);
    }
}