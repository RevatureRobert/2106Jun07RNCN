import { IMemes } from '@entities/Memes';
import logger from '@shared/Logger';
const TABLE_NAME = "meme-api";
import { dynamoClient} from 'src/dynamoDB/dynamoDB';

//interface for the MemeDao to accsess the datase
export interface IMemeDao {
    getOne: (id: number) => Promise<any>;
    getAll: () => Promise<any>;
    add: (meme: IMemes) => Promise<void>;
    delete: (id: number) => Promise<void>;
    getRandom: (type: string) => Promise<any>;
    
}

class MemeDao implements IMemeDao {

    //Get the meme from the database based on the id passed and return it
    public async getOne(id: number): Promise<any> {
        const params = {
            TableName: TABLE_NAME,
            Key:{
                "id":id
            },
        };
        const gotone = dynamoClient.get(params).promise();
        console.log("Retrived the meme")
        return gotone;
    }

    //Get all the memes from the database and return them
    public async getAll(): Promise<any> {
        const params = {
            TableName: TABLE_NAME
        }
        return dynamoClient.scan(params).promise();
    }

    //Add a meme based on the meme entity that was passed 
    public async add(meme: IMemes): Promise<void> {
        const params = {
            TableName: TABLE_NAME,
            Item:{
                id:meme.id,
                type:meme.type,
                imagelink:meme.imagelink
            }
        };
        dynamoClient.put(params).promise();
    }

    //Delete the meme based on the id that is passed
    public async delete(id: number): Promise<void> {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id
            },
        }
        dynamoClient.delete(params).promise();
        
    }
    //Get a random meme from the database
    public async getRandom(type: string): Promise<any>{
        let meme: Object;
        console.log(type);
        if(type === 'random'){
            
            const params = {
                TableName: TABLE_NAME,
                Key :{
                    id:'id'
                }
            };
            meme = await dynamoClient.scan(params).promise();
            const memeArr: any[] = Object.values(meme);
            let randInt: number = Math.floor(Math.random() * (memeArr[0].length - 0 + 1));
            let randId: number = memeArr[0][randInt].id;

            const randParams = {
                TableName: TABLE_NAME,
                Key: {
                    "id":randId,
                }       
            };
            const db = dynamoClient.get(randParams).promise();
            return db;
        }
        else{
            const params = {
                TableName: TABLE_NAME,
                Item :{
                    "type": type
                }
            };
            meme = await dynamoClient.scan(params).promise();
            const memeArr: any[] = Object.values(meme);
            let randInt: number = Math.floor(Math.random() * (memeArr[0].length - 0 + 1));
            let randId: number = memeArr[0][randInt].id;
            console.log(memeArr);
            const randParams = {
                TableName: TABLE_NAME,
                Key: {
                    "id":randId,
                }       
            };
            return dynamoClient.get(randParams).promise();
            
        }
    }
}

export default MemeDao;