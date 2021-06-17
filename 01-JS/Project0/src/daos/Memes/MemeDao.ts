import { IMemes } from '@entities/Memes';
import { MemeDataBase } from 'src/dynamoDB/dynamoDB';


export interface IMemeDao {
    getOne: (id: number) => Promise<any>;
    getAll: () => Promise<any[]>;
    add: (meme: IMemes) => Promise<void>;
    update: (meme: IMemes) => Promise<void>;
    delete: (id: number) => Promise<void>;
    db: MemeDataBase;
}

class MemeDao implements IMemeDao {

    db: MemeDataBase;
    constructor(memeDb: MemeDataBase){
        this.db = memeDb;
    }
    public async getOne(id: number): Promise<any> {
        const params = {
            TableName: this.db.TABLE_NAME,
            Key:{id},
        }
        const meme: any = await this.db.dynamoClient.scan(params).promise();
        console.log(meme);
        return meme;
    }


    public async getAll(): Promise<any[]> {
        const params = {
            TableName: this.db.TABLE_NAME,
        }
        const meme: any[] = await this.db.dynamoClient.scan(params).promise();
        console.log(meme);
        return meme;
    }



    public async add(meme: IMemes): Promise<void> {
        const params = {
            TableName: this.db.TABLE_NAME,
            Item:{
                id:meme.id,
                type:meme.type,
                imagelink:meme.imagelink
            }
        };
        console.log(params);
        return this.db.dynamoClient.put(params).promise();
    }


    public async update(meme: IMemes): Promise<void> {
        const params = {
            TableName: this.db.TABLE_NAME,
            Item:{
                id:meme.id,
                type:meme.type,
                imagelink:meme.imagelink
            }
        };
        return this.db.dynamoClient.update(params).promise();
    }


    public async delete(id: number): Promise<void> {
        const params = {
            TableName: this.db.TABLE_NAME,
            Key: {
                id
            },
        }
        return this.db.dynamoClient.delete(params).promise();
        
    }
}

export default MemeDao;