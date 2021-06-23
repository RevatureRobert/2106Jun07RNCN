import  MonsterDrops, { IMonsterDrops } from "../../entities/Drops";
import { ddb, ddbDoc } from "../DB/dynamo";
import { DeleteCommand, PutCommand, QueryCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const TABLE = "genshin";

export interface Dao{
    getOne: (name: string) => Promise<IMonsterDrops|null>;
    add: (IDrop: IMonsterDrops) => Promise<void>;
    updateDrop: (IDrop: IMonsterDrops) => Promise<any>;
    getAll: () => Promise<any>;
    deleteDrop: (name: string) => Promise<any>; 
}

class DropsDao implements Dao{
    public table = TABLE;

    //dao get command to receive 1 item by name
    public async getOne(name: string): Promise<IMonsterDrops|null>{
        //Set search peramaters specific to querycommand
        const params = {
            TableName: this.table,
            ExpressionAttributeValues: {
                ':dropName': name
            },
            KeyConditionExpression: "dropName = :dropName",
            
        };
        //Look for item in DB
        const data = await ddbDoc.send(new QueryCommand(params));
        let monDrop:IMonsterDrops;
        //In case data is invalid
        if(data.Items !== undefined){
            for(let i of data.Items){
                //i.monster is a stringset so to recover all of it, convert into array and feed into object   
                let mons = [];
                let count = 0;
                for(const j of i.monster){
                    mons[count] = j;
                    count++;
                }
                //parse data templated object i.e. MonsterDrops
                monDrop = new MonsterDrops(i.dropName ,i.generalName, mons, i.dropRate, i.minWorldRank, i.rarity);
                console.log("Success: ", monDrop);
                return Promise.resolve(monDrop);
            }
        }
        //Send null otherwise
        console.log(`${name} does not exist inside the database.`)
        return Promise.resolve(null);
    }

    public async getAll() {
        const params = {
            TableName: this.table,
        };          
        try {
            const data = await ddbDoc.send(new ScanCommand(params));
            console.log("Success :", data.Items);
            return Promise.resolve(data);
        } catch (err) {
            console.log("Error", err);
        }
    }

    //dao post command to add 1 item to the database
    public async add(IDrop: IMonsterDrops): Promise<void>{        
        console.log(IDrop);
        const params = {
            TableName: this.table,
            //Item: IDrop, 
            Item: {
                dropName: {S: IDrop.dropName},
                "generalName": IDrop.generalName,
                "monster": IDrop.monster,
                "dropRate":  IDrop.dropRate,
                "minWorldRank": IDrop.minWorldRank,
                "rarity": IDrop.rarity,
            }
        };
        console.log(params);
        try {
            //add to DB
            const data = await ddbDoc.send(new PutCommand(params));
            console.log(data);
        }catch (err) {
            console.error(err);
        }
    }

    public async deleteDrop(name: string): Promise<any>{
        const params = {
            TableName: this.table,
            Key: {
                ':dropName': name
            }
        }
        try {
            const data = await ddbDoc.send(new DeleteCommand(params));
            console.log("Success - item deleted");
            return data;
        } catch (err) {
            console.log("Error", err);
        }
    }

    public async updateDrop(iDrop: IMonsterDrops): Promise<any> {
        const params = {
            TableName: this.table,
            /*ExpressionAttributeValues: {
                ':dropName': iDrop.dropName
            },*/
            Key: {
              ":dropName": iDrop.dropName
            },
            // Define expressions for the new or updated attributes
            UpdateExpression: "set generalName =:g, monster = :t, dropRate = :d, minWorldRank = :m, rarity = :s", // For example, "'set Title = :t, Subtitle = :s'"
            ExpressionAttributeValues: {
              ":g": iDrop.generalName,
              ":t": iDrop.monster, // For example ':t' : 'NEW_TITLE'
              ":d": iDrop.dropRate,
              ":m": iDrop.minWorldRank,
              ":s": iDrop.rarity, // For example ':s' : 'NEW_SUBTITLE'
            },
          };
          
        
        try {
          const data = await ddbDoc.send(new UpdateCommand(params));
          console.log("Success - item added or updated", data);
          console.log(params);
          return data;
        } catch (err) {
          console.log("Error", err);
        }
    }
}

export default DropsDao;
