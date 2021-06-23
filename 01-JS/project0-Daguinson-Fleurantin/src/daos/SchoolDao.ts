import { uuid } from 'uuidv4';
// import { ISchool } from '../entities/Schools';
import {DynamoDBClient} from '@aws-sdk/client-dynamodb'
import { School } from '../entities/School';
import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  ScanCommand
  
} from '@aws-sdk/lib-dynamodb';

export interface ISchoolDao {
  getAll: (array: any) => Promise<School[]>;
  getOne: (aSchool: any) => Promise<School | null>;
  add: (aschool: any) => Promise<void>;
  update: (aSchool: School) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

const REGION = 'us-east-2';
const ddbClient = new DynamoDBClient({
  region: REGION
});

const TABLE_NAME = 'high-school';

export class SchoolDao implements ISchoolDao {
  public async add(aSchool): Promise<void> {
    await ddbClient.send(new PutCommand(aSchool));
  }

  public async getOne(aSchool): Promise<School | null> {
    const data = await ddbClient.send(new GetCommand(aSchool));
    return data.Item as School
  }

  public async update(aSchool): Promise<void> {
    await ddbClient.send(new PutCommand(aSchool));
  }

  public async delete(aSchool): Promise<void> {
    await ddbClient.send(new DeleteCommand(aSchool));
  }

  public async getAll(array): Promise<School[]> {
    const data = await ddbClient.send(new ScanCommand(array));
    return data.Items as School[];
  }
}
