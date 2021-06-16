// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var AWS = require('aws-sdk');

//Load config file and establish client
AWS.config.loadFromPath('./config.json');
var docClient = new AWS.DynamoDB.DocumentClient();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port : 8080
var port = process.env.PORT || 8080;      


// get an instance of the express Router
var router = express.Router();              

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/countries', function(req, res) {

  var params = {
    TableName: "Flight_Countries"
    
  };


  docClient.scan(params, onScan);
  let output = [];

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        data.Items.forEach(function(element) {

          output.push(element);
     

           
        });
        res.json(output);
     
    }
}
});

router.get('/flights/august', function(req, res) {

  var params = {
    TableName: "August_Flights"
  }

  docClient.scan(params, onScan);
  let output = [];

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        data.Items.forEach(function(element) {

          output.push(element);
     

           
        });
        res.json(output);
     
    }
}
});

router.post('/country/add', function(req, res) {

    console.log(req.body);

    var params = {
      TableName: "Flight_Countries",
      Item: {
        "Code": req.body.Code,
        "Name": req.body.Name
      }
    };

    docClient.put(params, function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
      }
  });

  res.end("Added item!");

});

router.delete('/country/remove', function(req, res) {

  var params = {
    TableName: "Flight_Countries",
    Key: {
      "Code": req.body.Code
    },
    Item: {
      "Code": req.body.Code,
      "Name": req.body.Name
    }
  };

  

  docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }

    res.end("Item deleted succesfully!");
});

});

router.put("/country/update", function(req, res) {

  var params = {
    TableName: "Flight_Countries",
    Key: {
      "Code": req.body.Code,
    },
    Item: {
      "Code": req.body.Code,
      "Name": req.body.Name
    }
  }

  docClient.update(params, function(err, data) {
    if (err) {
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
  }
  });
  
});

// all of our routes will be prefixed with /api
app.use('/api', router);






// START THE SERVER

app.listen(port);
console.log('Magic happens on port ' + port);
