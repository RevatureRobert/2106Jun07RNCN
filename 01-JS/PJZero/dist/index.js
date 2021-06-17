import * as repo from "./src/data/dragonRepo.js";
import { dragon } from "./src/model/dragonObject.js";
import express from "express";
import { addDragonByObject, findDragon } from './dynamo.js';
repo.loadPromisedData();
const app = express();
app.set('query parser', 'simple');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/dragon/find', async (req, res, next) => {
    try {
        let name = req.query.name;
        let foundDragon = await findDragon(name);
        foundDragon.Items.forEach(dragon => {
            dragon.entityID = undefined;
        });
        res.json(foundDragon);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: "Something went wrong" });
    }
});
app.post('/dragon/add', async (req, res, next) => {
    try {
        let r = req.body;
        let newDragon = new dragon(r.entityID, r.Name, r.Origin, r.Style, r.Wings, r.Legs, r.Length, r.Weight, r.Flight, r.Magical);
        const addedDragon = await addDragonByObject(newDragon);
        res.send(addedDragon);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: "Something went wrong" });
    }
});
app.listen(3000, () => {
    console.log('The server is listening...');
});
