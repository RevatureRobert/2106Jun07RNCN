const express = require('express');

import { Request, Response } from 'express';

import { delTitle ,newTitle ,allTitles ,oneTitle } from '../myControllers/titles';




//my router for anime titles
const Animerouter = express.Router();

//will get all Tiles from the database
Animerouter.get('/',allTitles);

//will return a single title
Animerouter.get('/:id', oneTitle);

//adds new titles to the database
Animerouter.post('/add', newTitle);

//Updates titles in  the database 
Animerouter.put('/:id', newTitle);

//delete's a title from the database
Animerouter.delete('/:id', delTitle);



export default Animerouter;



