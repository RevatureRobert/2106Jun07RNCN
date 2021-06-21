import * as repo from "./src/data/dragonRepo.js";
import { dragon } from "./src/model/dragonObject.js";
import * as http from "http";
import express from "express";
import { addDragonByObject, deleteDragonByID, findDragon, updateDragon} from './dynamo.js';
repo.loadPromisedData();

const app = express();
app.set('query parser', 'simple');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Finds a dragon based on any valid parameter, ignoring invalid ones entirely
app.get('/dragon', async (req, res, next) => {
    try {
        let query = req.query;
        let foundDragons = await findDragon(query);
        foundDragons.Items.forEach(dragon => {
            dragon.entityID = undefined;
        });
        res.json(foundDragons);
    } catch (error) {
        console.error(error);
        res.status(500).json({err: "Something went wrong"});
    }
})

// Adds a dragon from form input. Thanks to the simple query parser, inputs should already be partially validated
app.post('/dragon', async (req, res, next) => {
    try {
        // Accept the request body into the r variable, and then insert that into a new Dragon object
        let r = req.body;
        let newDragon = new dragon(r.entityID, r.Name, r.Origin, r.Style, r.Wings, r.Legs, r.Length, r.Weight, r.Flight, r.Magical);
        const addedDragon = await addDragonByObject(newDragon);
        res.send(addedDragon);
    } catch (error) {
        console.error(error);
        res.status(500).json({err: "Something went wrong"});
    }
})

// Adds one specific dragon, for the deletion test.
app.post('/dragon/add_for_test', async (req, res, next) => {
    try {
        // Accept the request body into the r variable, and then insert that into a new Dragon object
        let r = req.body;
        let newDragon = new dragon(66, 'Voiden', 'The edge of time', 'Eastern', 0, 2, 10000, 0, true, true);
        const addedDragon = await addDragonByObject(newDragon);
        res.send(addedDragon);
    } catch (error) {
        console.error(error);
        res.status(500).json({err: "Something went wrong"});
    }
})

// Deletes a dragon altogether. This requires utilizing entityID, which is not shown to end users at all.
app.delete('/dragon', async (req, res, next) => {
    try {
        let query = req.query;
        let foundDragons = await deleteDragonByID(query.Identifier, query.Name);
        res.json(foundDragons);
    } catch (error) {
        console.error(error);
        res.status(500).json({err: "Something went wrong"});
    }
})

// Serves to update data for the dragon object
app.put('/dragon', async (req, res, next) => {
    try {
        let query = req.query;
        // Accept the request body into the r variable, and then insert that into a new internal Dragon object
        let r = req.body;
        let updatedDragon = new dragon(r.entityID, r.Name, r.Origin, r.Style, r.Wings, r.Legs, r.Length, r.Weight, r.Flight, r.Magical);
        const addedDragon = await updateDragon(query.Identifier, query.Name, updatedDragon);
        res.send(addedDragon);
    } catch (error) {
        console.error(error);
        res.status(500).json({err: "Something went wrong"});
    }
})

app.listen(3000, () => {
    console.log('The server is listening...');
})
