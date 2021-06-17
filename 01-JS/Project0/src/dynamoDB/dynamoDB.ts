require('dotenv').config();

export class MemeDataBase{

    private AWS: any; 
    public dynamoClient: any;
    public TABLE_NAME = "meme-api"; 

    constructor(){
        this.AWS=require('aws-sdk');
        this.AWS.config.update({
            region: process.env.AWS_DEFAULT_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY

        });
        this.dynamoClient = new this.AWS.DynamoDB.DocumentClient();
    }
}