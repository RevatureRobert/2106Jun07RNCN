import {DynamoDBClient, PutItemCommand, ScanInput, GetItemCommand, ScanCommand, DeleteItemCommand, UpdateItemCommand} from '@aws-sdk/client-dynamodb';
import { dragon } from './src/model/dragonObject';


const REGION = "us-east-2"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });

const TABLE_NAME = 'dragons';

// Directly takes in the res.query and validates it, before sending a scan command to DynamoDB
export const findDragon = async (searchQuery) => {
    var params = validateGet(searchQuery);
    return await ddbClient.send(new ScanCommand(params));
}

// Takes in a dragon object and converts it into usable code for the AWS database
export const addDragonByObject = async (dragonObject: dragon) => {
    let cleanDragon = dragonObject.sanitize();
    const params = {
        TableName: TABLE_NAME,
        Item: cleanDragon
    };
    return await ddbClient.send(new PutItemCommand(params));
}

// If given a valid ID and name (the two must coincide), deletes the dragon found there
export const deleteDragonByID = async (dragonID, dragonName) => {
    if (!dragonID || !dragonName) {
        return 'Error: give valid inputs!';
    }
    var params = {
        TableName: TABLE_NAME,
        Key: {
            "entityID": {"N": dragonID},
            "Name": {"S": dragonName}
        }
    }
    return await ddbClient.send(new DeleteItemCommand(params));
}

export const updateDragon = async (queryID, queryName, putDragon) => {
    var params = validatePut(queryID, queryName, putDragon);
    return await ddbClient.send(new UpdateItemCommand(params));
}

// Produces the params for any search function needed
// Enables searching via any and all parameters or any combination thereof
function validateGet(inputQuery) {
    let filterExpression = '';
    let expressionAttributeNames = {};
    let expressionAttributeValues = {};

    if (inputQuery.Name) {
        filterExpression += '#n = :n';
        expressionAttributeNames["#n"] = "Name";
        expressionAttributeValues[":n"] = {S: inputQuery.Name};
    }
    if (inputQuery.Origin) {
        filterExpression += ' AND Origin = :o';
        expressionAttributeValues[":o"] = {S: inputQuery.Origin};
    }
    if (inputQuery.Style) {
        filterExpression += ' AND #s = :s';
        expressionAttributeNames["#s"] = "Style";
        expressionAttributeValues[":s"] = {S: inputQuery.Style};
    }
    if (inputQuery.Wings) {
        filterExpression += ' AND Wings = :w';
        expressionAttributeValues[":w"] = {N: inputQuery.Wings};
    }
    if (inputQuery.Legs) {
        filterExpression += ' AND Legs = :l';
        expressionAttributeValues[":l"] = {N: inputQuery.Legs};
    }
    if (inputQuery.Weight) {
        filterExpression += ' AND Weight = :wt';
        expressionAttributeNames["#wt"] = "Weight (Kilos)";
        expressionAttributeValues[":wt"] = {N: inputQuery.Weight};
    }
    if (inputQuery.Length) {
        filterExpression += ' AND #l = :ln';
        expressionAttributeNames["#l"] = "Length (Meters)";
        expressionAttributeValues[":ln"] = {N: inputQuery.Length};
    }
    if (inputQuery.Flight) {
        filterExpression += ' AND Flight = :f';
        expressionAttributeValues[":f"] = {BOOL: inputQuery.Flight};
    }
    if (inputQuery.Magical) {
        filterExpression += ' AND Magical = :m';
        expressionAttributeValues[":m"] = {BOOL: inputQuery.Magical};
    }

    // Converts all of the above into a single usable parameter object - ScanCommand is very finnicky.
    let result = {
        // Cuts off a leading AND if there is one - so that Name need not be the first value given.
        FilterExpression: filterExpression.replace(/^\sAND\s/, ''),
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
        TableName: TABLE_NAME
    };

    // Completely removes the attribute name from Result, but only if it's empty
    // Turns out passing an empty value into ScanCommand breaks it.
    if (!inputQuery.Name && !inputQuery.Source && !inputQuery.Length && !inputQuery.Weight) {
        console.log('Deleting empty data...');
        delete result.ExpressionAttributeNames;
    }

    return result;
}

// Produces the params for the update function
// Enables updating any parameters besides ID and Name
function validatePut(queryID, queryName, inputQuery) {
    let updateExpression = 'set ';
    let expressionAttributeNames = {};
    let expressionAttributeValues = {};
    console.log(inputQuery);

    if (inputQuery.Origin != undefined) {
        updateExpression += 'Origin = :o, ';
        expressionAttributeValues[":o"] = {S: inputQuery.Origin};
    }
    if (inputQuery.Style != undefined) {
        updateExpression += '#s = :s, ';
        expressionAttributeNames["#s"] = "Style";
        expressionAttributeValues[":s"] = {S: inputQuery.Style};
    }
    if (inputQuery.Wings != undefined) {
        updateExpression += 'Wings = :w, ';
        expressionAttributeValues[":w"] = {N: inputQuery.Wings.toString()};
    }
    if (inputQuery.Legs != undefined) {
        updateExpression += 'Legs = :l, ';
        expressionAttributeValues[":l"] = {N: inputQuery.Legs.toString()};
    }
    if (inputQuery.Weight != undefined) {
        updateExpression += '#wt = :wt, ';
        expressionAttributeNames["#wt"] = "Weight (Kilos)";
        expressionAttributeValues[":wt"] = {N: inputQuery.Weight.toString()};
    }
    if (inputQuery.Length != undefined) {
        updateExpression += '#l = :ln, ';
        expressionAttributeNames["#l"] = "Length (Meters)";
        expressionAttributeValues[":ln"] = {N: inputQuery.Length.toString()};
    }
    if (inputQuery.Flight != undefined) {
        updateExpression += 'Flight = :f, ';
        expressionAttributeValues[":f"] = {BOOL: inputQuery.Flight};
    }
    if (inputQuery.Magical != undefined) {
        updateExpression += 'Magical = :m';
        expressionAttributeValues[":m"] = {BOOL: inputQuery.Magical};
    }

    // Converts all of the above into a single usable parameter object - UpdateItemCommand is also very finnicky.
    let result = {
        // Cuts off a trailing comma if there is one
        UpdateExpression: updateExpression.replace(/, $/, ''),
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
        TableName: TABLE_NAME,
        Key: {
            "entityID": {N: queryID},
            "Name": {S: queryName}
        }
    };

    // Completely removes the attribute name from Result, but only if it's empty
    // Turns out passing an empty value into UpdateItemCommand breaks it.
    if (!inputQuery.Source && !inputQuery.Length && !inputQuery.Weight) {
        console.log('Deleting empty data...');
        delete result.ExpressionAttributeNames;
    }

    return result;
}