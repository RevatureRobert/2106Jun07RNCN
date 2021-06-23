import { Character } from '@entities/Character';
import * as DB from '@shared/DB';
const TABLE_NAME = "RPG_Chars";


/**
 * Retrieve all users from the database.
 * 
 * @returns users
 */
export const getCharacters = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    const characters = await DB.dynamoClient.scan(params).promise();
    return characters.Items;
};
/**
 * Retrieve one user from the database, by ID
 * 
 * @returns users
 */
 export const getCharacter = async (SID: string) => {
     let id = parseInt(SID);
    console.log(id);

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    };
    const character = await DB.dynamoClient.get(params).promise();
    return character.Item;
};
/**
 * Retrieve all users that are played by a specific player
 * 
 * @returns users
 */
 export const getCharbyPlayer = async (player: string) => {

   const params = {
       TableName: TABLE_NAME,
       IndexName: "player-index",
       KeyConditionExpression: "player = :p",
       ExpressionAttributeValues: {
           ":p": player
       }
   };
   const character = await DB.dynamoClient.query(params).promise();
   return character.Items;
};
/**
 * Retrieve all users that are in a specific location
 * 
 * @returns users
 */
 export const getCharbyLocation = async (location: string) => {

    const params = {
        TableName: TABLE_NAME,
        IndexName: "location-index",
        KeyConditionExpression: '#l = :l',
        ExpressionAttributeValues: {
            ":l" : location
        },
        ExpressionAttributeNames: {
            //workaround because location is reserved
            "#l": "location"
          }
    };
    const character = await DB.dynamoClient.query(params).promise();
    return character.Items;
 };
/**
 * Delete user from database.
 * 
 * @returns response
 */
 export const deleteCharacter = async (SID: string) => {
    let id = parseInt(SID);
   console.log("delete " + id);

   const params = {
       TableName: TABLE_NAME,
       Key: {
           id
       }
   };
   const character = await DB.dynamoClient.delete(params).promise();
   return character;
};
/**
 * Add or update a character in the database.
 * @param email
 * @returns response
 */
export const addOrUpdateCharacter = async (character: Character) => {
    const params = {
        TableName: TABLE_NAME,
        Item: character
    };
    const response = await DB.dynamoClient.put(params).promise();
    
    return response;
};
/**
 * Add exp to a character, levelling them up each time they reach 100 exp.
 * @param email
 * @returns response
 */
 export const levelCharacter = async (SID: string, SEXP: string) => {
    let id = parseInt(SID);
    let exp = parseInt(SEXP);
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    };
    const character = await DB.dynamoClient.get(params).promise();
    let c = character.Item;
    console.log(c);
    //check if a proper character was retrieved
    if(c != undefined){
        //add the exp to the character
        c.exp += exp;
        //level up if exp above 99
        while (c.exp >= 100){
            c.exp -= 100;
            c.level += 1;
        }
        //level down if exp is below 0
        while (c.exp < 0){
            c.exp += 100;
            c.level -= 1;
        }
        //you cannot be level 0 or below, if you are, set to level 1
        c.level = c.level < 1 ? 1 : c.level;
        const params = {
            TableName: TABLE_NAME,
            Item: c
        };
        const response = await DB.dynamoClient.put(params).promise();
        return response;
    }else {
        return character;
    }
  


};

