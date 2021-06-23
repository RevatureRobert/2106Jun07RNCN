// server.js

// BASE SETUP
// =============================================================================
//import { FlightDao } from './FlightDaoImpl.ts'; 

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
const FlightDaoImplem = require('../dist/FlightDaoImplem.js');
 
//Instantiate a FlightDao
let flightDao = new FlightDaoImplem();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port : 8080
var port = process.env.PORT || 8080;      


// get an instance of the express Router
var router = express.Router();              


let countries;
countries = flightDao.getCountries();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/countries', function(req, res, ) {
    
        res.json(countries);
});

let flightsAugust;
flightsAugust = flightDao.getFlightsAugust();

router.get('/flights/august', function(req, res) {
 
     res.json(flightsAugust);

});

router.post('/country/add', function(req, res) {

  if(flightDao.addCountry(req.body.Code, req.body.Name)) {
    
      res.end("Added item!");
  }

  countries = flightDao.getCountries();
});

router.delete('/country/remove', function(req, res) {

    if(flightDao.deleteCountry(req.body.Code, req.body.Name)) {
      countries = flightDao.getCountries();

      res.send("Item deleted succesfully!");
    }

});

router.put("/country/update", function(req, res) {


  if(flightDao.updateCountry(req.body.Code, req.body.Name)) {
    countries = flightDao.getCountries();

    res.send("Item updated successfully!");
  }
  countries = flightDao.getCountries();

});

// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
