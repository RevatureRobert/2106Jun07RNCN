import * as repo from "./src/data/dragonRepo.js";
import express from "express";
import { findOneDragon, getDragonTest } from './dynamo.js';
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
app.get('/findParthy', async (req, res, next) => {
    try {
        const foundDragons = await findOneDragon('Paarthurnax');
        res.json(foundDragons);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: "Something went wrong." });
    }
});
// Functioning code for adding Spyro...but I mean now Spyro's added so it won't do anything...
// app.get('/addSpyro', async (req, res, next) => {
//     try {
//         const foundDragons = await addOrUpdateDragon();
//         res.json(foundDragons);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({err: "Something went wrong."});
//     }
// })
app.listen(3000, () => {
    console.log('The server is listening...');
});
