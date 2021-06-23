const express = require('express');

import { Request, Response } from 'express';

import { userIndex , addUser,updateUser, delUser} from '../myControllers/users';

//import {Userrouter} from '../index';

const Userrouter = express.Router();

//gets the user from database
Userrouter.get('/',userIndex);

//adds new user to the database
Userrouter.post('/add', addUser);

//Updates users in the database 
Userrouter.put('/:id', updateUser);

//deletes user's from database
Userrouter.delete('/:id',delUser);


export default Userrouter;