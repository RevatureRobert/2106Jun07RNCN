"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repo = require("./src/data/DinoRepo");
const app = express_1();
repo.loadPromisedData();
app.get('/dino', (req, res, next) => {
    res.send(repo.db);
});
app.listen(3000, () => {
    console.log('the server is listening and active');
});
