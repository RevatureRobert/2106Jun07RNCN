import { DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
import {ddbClient} from "./ddbClient.js";
// Set the AWS Region.
//const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");
//const { multiMatchAwareSubstrings } = require("mnemonist/passjoin-index");
//require('dotenv').config();

const client = new DynamoDBDocumentClient({ region: "us-west-1" });
const TABLE_NAME = "genshin-drops";

const getCharacters = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    const characters = await DynamoDBDocumentClient.scan(params).promise();
    return characters;
}

getCharacters();




//import{config} from 'dotenv';

/*
(async () => {
  const client = new DynamoDBClient({ region: "us-west-1" });
  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    console.log(results.TableNames.join("\n"));
  } catch (err) {
    console.error(err);
  }
})();
*/

