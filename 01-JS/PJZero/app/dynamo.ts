// import * as AWS from 'aws-sdk';
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";

const REGION = "us-east-2"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });

const marshallOptions = {
    // Whether to automatically convert empty strings, blobs, and sets to `null`.
    convertEmptyValues: false, // false, by default.
    // Whether to remove undefined values while marshalling.
    removeUndefinedValues: false, // false, by default.
    // Whether to convert typeof object to map attribute.
    convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

// Create the DynamoDB Document client.
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, translateConfig);



// ***CONSTANTS FOR TESTING PURPOSES***
const TABLE_NAME = 'dragons';
const KEY_VALUE = '1';
const SORT_KEY = 'Alduin';


export const getDragonTest = async () => {

    const params = {
        TableName: TABLE_NAME,
        Key: {
            entityID: KEY_VALUE,
            Name: SORT_KEY
        },
    };
    const gainedDragons = async () => {
        // const data = await ddbDocClient.send(new GetCommand(params));
        const data = await ddbDocClient.send(new GetCommand(params));
        console.log("Success", data.Item);
        return data;
      };
    console.log(gainedDragons.toString());
    return gainedDragons;
}

// const addOrUpdateDragon = async (dragon) => {
//     const params = {
//         TableName: TABLE_NAME,
//         Item: dragon
//     };
//     return await dynamoClient.put(params).promise();
// }