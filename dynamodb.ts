import AWS from 'aws-sdk';
require('dotenv').config();

//the users credetials 
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    
});

//how to connet to the anime dynamodb table
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME ="Anime";
const TABLE_NAME1 = "animeusers";


//all my CRUD opts

const getUsers = async ()=>{

    const params = {
        TableName: TABLE_NAME1
    };
    const users = await dynamoClient.scan(params).promise();
    console.log(users);
    return users;
};

const addOrUpdateUsers = async(users: any) =>{
    const params = {
        TableName: TABLE_NAME1,
        Item: users
    }
return await dynamoClient.put(params).promise();
};


const getUsersById = async(id: any) =>{
    const parmas ={
        TableName: TABLE_NAME1,
        Key:{id},
    }
    return await dynamoClient.get(parmas).promise();
};

const deleteUsersById = async(id: any) =>{
    const parmas ={
        TableName: TABLE_NAME1,
        Key: {id},
    }
    return await dynamoClient.delete(parmas).promise();
};

const getTitles = async (id: any)=>{

    const params = {
        TableName: TABLE_NAME,
        Key:{id},
    };
    const titles = await dynamoClient.scan(params).promise();
    console.log(titles);
    return titles;
};

const addOrUpdateTitles = async(titles: any) =>{
    const params = {
        TableName: TABLE_NAME,
        Item: titles
    }
 return await dynamoClient.put(params).promise();
 };



const getTitlesById = async(id: any) =>{
    const parmas ={
        TableName: TABLE_NAME,
        Key:{id},
    }
    return await dynamoClient.get(parmas).promise();
 };

 const deleteTitlesById = async(id: any) =>{
    const parmas ={
        TableName: TABLE_NAME,
        Key: {id},
    }
    return await dynamoClient.delete(parmas).promise();
 };


 //exporting modules to myControllers
module.exports ={
    dynamoClient,
    getTitles,
    getTitlesById,
    addOrUpdateTitles,
    deleteTitlesById,
    getUsers,
    getUsersById,
    deleteUsersById,
    addOrUpdateUsers
};
