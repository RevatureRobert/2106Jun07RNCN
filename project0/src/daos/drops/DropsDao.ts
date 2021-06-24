import  MonsterDrops, { IMonsterDrops } from "../../entities/Drops";
import { ddb, ddbDoc } from "../DB/dynamo";
import { DeleteCommand, PutCommand, QueryCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const TABLE = "genshin";

export interface Dao{
    getOne: (name: string) => Promise<IMonsterDrops|null>;
    add: (IDrop: IMonsterDrops) => Promise<void>;
    getAll: () => Promise<any>;
    deleteDrop: (name: string) => Promise<void>; 
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
            return Promise.resolve(data.Items);
        } catch (err) {
            console.log("Error", err);
        }
    }

    //dao post command to add 1 item to the database
    public async add(IDrop: IMonsterDrops): Promise<void>{    
        const params = {
            TableName: this.table,
            Item: IDrop
        }
        await ddbDoc.send(new PutCommand(params));
    }

    public async deleteDrop(dropName: string): Promise<void>{
        console.log(dropName);
        const params = {
            TableName: this.table,
            Key: {
                "dropName": dropName,
            }
        }
        try {
            await ddbDoc.send(new DeleteCommand(params));
            console.log("Success - item deleted");
        } catch (err) {
            console.log("Error", err);
        }
    }
}

export default DropsDao;
