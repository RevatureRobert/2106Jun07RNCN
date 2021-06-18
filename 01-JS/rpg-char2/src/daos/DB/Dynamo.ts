import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
const REGION:string = "us-east-2"
const ddb:DynamoDBClient = new DynamoDBClient({region:REGION})

export {ddb};