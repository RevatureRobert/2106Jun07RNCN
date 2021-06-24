"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPromisedData = exports.loadData = exports.writeArray = exports.db = void 0;
// importing a module from node_modules or node core modules, use just the name
const fs = require("fs");
const path = require("path");
const FILE_NAME = path.resolve("./db/dino.json", "../../db/dino.json");
exports.db = [];
/*
truthy and falsey values
    falsey:
        0, false, "", undefined, null, NaN
*/
function writeArray() {
    fs.writeFile(FILE_NAME, JSON.stringify(exports.db), (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("The file was written to");
    });
}
exports.writeArray = writeArray;
function loadData() {
    fs.readFile(FILE_NAME, (err, data) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("the data has been retrieved");
        exports.db = JSON.parse(data.toString());
    });
}
exports.loadData = loadData;
async function loadPromisedData() {
    try {
        const str = await fs.promises.readFile(FILE_NAME, { encoding: "utf-8" });
        exports.db = JSON.parse(str);
    }
    catch (error) {
        console.error(error);
    }
}
exports.loadPromisedData = loadPromisedData;
