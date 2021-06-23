import  MonsterDrops, { IMonsterDrops } from "../../entities/Drops";
import { ddb, ddbDoc } from "../DB/dynamo";
import { DeleteCommand, PutCommand, QueryCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
const TABLE = "genshin";

export interface Dao{
    getOne: (name: string) => Promise<IMonsterDrops|null>;
    add: (iMonDrop: IMonsterDrops) => Promise<void>;
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

    //dao post command to add 1 item to the database
    public async add(IDrop: IMonsterDrops): Promise<void>{        
        const params = {
            TableName: this.table,
            Item: 
            {
                dropName: IDrop.dropName,
                generalName: IDrop.generalName,
                monster: IDrop.monster,
                dropRate:  IDrop.dropRate,
                minWorldRank: IDrop.minWorldRank,
                rarity: IDrop.rarity,
            }
        };
        try {
            //add to DB
            const data = await ddbDoc.send(new PutCommand(params));
            console.log(data);
        }catch (err) {
            console.error(err);
        }
    }
}

export default DropsDao;
