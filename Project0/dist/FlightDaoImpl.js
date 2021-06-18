"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightDaoImpl =  void 0;
//Singular source of access to the database
var AWS = require('aws-sdk');
//Load config file and establish client
AWS.config.loadFromPath('./config.json');
var docClient = new AWS.DynamoDB.DocumentClient();
module.exports = class FlightDaoImpl {
    getFlightsAugust() {
        var params = {
            TableName: "August_Flights"
        };
        docClient.scan(params, onScan);
        let output = [];
        function onScan(err, data) {
            if (err) {
                console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
            }
            else {
                // print all the movies
                console.log("Scan succeeded.");
                data.Items.forEach(function (element) {
                    output.push(element);
                });
            }
        }
        return output;
    }
    addCountry(code, name) {
        var params = {
            TableName: "Flight_Countries",
            Item: {
                "Code": code,
                "Name": name
            }
        };
        docClient.put(params, function (err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                return false;
            }
            else {
                console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });
        return true;
    }
    deleteCountry(code, name) {
        var params = {
            TableName: "Flight_Countries",
            Key: {
                "Code": code
            },
            Item: {
                "Code": code,
                "Name": name
            }
        };
        docClient.delete(params, function (err, data) {
            if (err) {
                console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
                return false;
            }
            else {
                console.log("DeleteItem succeeded:");
            }
        });
        return true;
    }
    updateCountry(code, name) {
        var params = {
            TableName: "Flight_Countries",
            Key: {
                "Code": code,
            },
            Item: {
                "Code": code,
                "Name": name
            }
        };
        docClient.update(params, function (err, data) {
            if (err) {
                console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                return false;
            }
            else {
                console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            }
        });
        return true;
    }
    getCountries() {
        var params = {
            TableName: "Flight_Countries"
        };
        docClient.scan(params, onScan);
        let output = [];
        function onScan(err, data) {
            if (err) {
                console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
            }
            else {
                // print all the movies
                console.log("Scan succeeded.");
                data.Items.forEach(function (element) {
                    output.push(element);
                });
            }
        }
        return output;
    }
}
exports.FlightDaoImpl = FlightDaoImpl;
