require('dotenv').config();
import AWS from 'aws-sdk';


//Sets up aws for the api and connects to a database passed on our access credtials  
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY  
});
export const dynamoClient = new AWS.DynamoDB.DocumentClient();