// import * as AWS from 'aws-sdk';
import {DynamoDBClient, PutItemCommand, ScanInput, GetItemCommand, ScanCommand} from '@aws-sdk/client-dynamodb';
import { json } from 'express';
// import { GetItemCommand } from "@aws-sdk/client-dynamodb";
// import { GetCommand } from "@aws-sdk/lib-dynamodb";
// import { ScanCommand } from "@aws-sdk/client-dynamodb";
// import * as DynaDB from "@aws-sdk/client-dynamodb";
import { dragon } from './src/model/dragonObject';


const REGION = "us-east-2"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });

// ***CONSTANTS FOR TESTING PURPOSES***
const TABLE_NAME = 'dragons';

export const findDragon = async (searchName) => {
    var params = {
        FilterExpression: "#n = :n",
        ExpressionAttributeNames: {"#n": "Name"},
        ExpressionAttributeValues: {
            ":n": {S: searchName}
        },
        TableName: TABLE_NAME,
    }
    return await ddbClient.send(new ScanCommand(params));
}

export const addDragonByObject = async (dragonObject: dragon) => {
    let cleanDragon = sanitizeDragon(dragonObject);
    const params = {
        TableName: TABLE_NAME,
        Item: cleanDragon
    };
    return await ddbClient.send(new PutItemCommand(params));
}

function sanitizeDragon (dragonObject: dragon) {
    let Item = {
        "entityID": {"N": dragonObject.entityID.toString()},
        "Name": {"S": dragonObject.Name},
        "Origin": {"S": dragonObject.Origin},
        "Style": {"S": dragonObject.Style},
        "Weight (Kilos)": {"N": dragonObject.Weight.toString()},
        "Length (Meters)": {"N": dragonObject.Length.toString()},
        "Wings": {"N": dragonObject.Wings.toString()},
        "Legs": {"N": dragonObject.Legs.toString()},
        "Flight": {"BOOL": dragonObject.Flight},
        "Magical": {"BOOL": dragonObject.Magical}
    }
    return Item;
}