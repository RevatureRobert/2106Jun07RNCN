import * as repo from "./src/data/dragonRepo.js";
import express from "express";
import { getDragonTest } from './dynamo.js';
repo.loadPromisedData();
const app = express();
app.get('/allDragons', (req, res, next) => {
    res.send(repo.db);
});
app.get('/databaseDragons', async (req, res, next) => {
    try {
        const foundDragons = await getDragonTest();
        res.json(foundDragons);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: "Something went wrong." });
    }
});
app.listen(3000, () => {
    console.log('The server is listening...');
});
