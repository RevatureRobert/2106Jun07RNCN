import * as AWS from 'aws-sdk';
import {DynamoDBClient, PutItemCommand, ScanInput} from '@aws-sdk/client-dynamodb';
import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ScanCommand } from "@aws-sdk/client-dynamodb";
import * as DynaDB from "@aws-sdk/client-dynamodb";


const REGION = "us-east-2"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });

// ***CONSTANTS FOR TESTING PURPOSES***
const TABLE_NAME = 'dragons';
const KEY_VALUE = '1';
const SORT_KEY = 'Alduin';


export const getDragonTest = async () => {
    var params = {
        TableName: TABLE_NAME,
        Key: {
            "entityID": {"N": KEY_VALUE},
            "Name": {"S": SORT_KEY}
        },
    }
    return await ddbClient.send(new GetItemCommand(params));
}

export const findOneDragon = async (searchName) => {
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

const TEST_DRAGON = {
    "entityID": {
      "N": "50"
    },
    "Flight": {
      "BOOL": true
    },
    "Legs": {
      "N": "4"
    },
    "Length (Meters)": {
      "N": "1"
    },
    "Magical": {
      "BOOL": true
    },
    "Name": {
      "S": "Spyro"
    },
    "Origin": {
      "S": "Spyro the Dragon"
    },
    "Style": {
      "S": "Western"
    },
    "Weight (Kilos)": {
      "N": "3"
    },
    "Wings": {
      "N": "2"
    }
  }

export const addOrUpdateDragon = async () => {
    const params = {
        TableName: TABLE_NAME,
        Item: TEST_DRAGON
    };
    return await ddbClient.send(new PutItemCommand(params));
}