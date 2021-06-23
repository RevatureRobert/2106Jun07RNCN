"use strict";
exports.__esModule = true;
//Required External Module  imprting project dependencies
var dotenv = require("dotenv");
var express_1 = require("express");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var animeUsers = require('./routes/users');
var animetitles = require('./routes/titles');
//import { getUser, getUsers } from '../read.me/Project Zero/controllers/users';
dotenv.config();
var animeapp = express_1["default"]();
//check to see if node.js loaded the env var port into process.env
//if so, parse it's value as a number type and creates an instance of an express app
//App Var
if (!process.env.PORT) {
    process.exit(1);
}
//lets you parse body data
animeapp.use(express_1["default"].json());
//define my port im working on '6000'
var PORT = parseInt(process.env.PORT, 10);
//App config  mount the middlewaer func from the packages that are importing into 
//this entry ponit module
//helmet is a collection of 14 small middleware functions that set HTTP response headers
animeapp.use(helmet_1["default"]());
//by mounting cors() enable all CORS requests
animeapp.use(cors_1["default"]());
//parse incoming requests with JSON payloads, which populates request obj 
//with a new body obj containing the parse data
animeapp.use(express_1["default"].json());
//only use when route starts with '/route name'
animeapp.use('/users', animeUsers);
animeapp.use('/titles', animetitles);
/**
 * Server Activation
 */
//send a default url message
animeapp.get('/', function (req, res) {
    res.send("Now you're cooking with crisco!");
});
//tells you the port you're listening on
animeapp.listen(PORT, function () {
    console.log("Listening on post " + PORT);
});
