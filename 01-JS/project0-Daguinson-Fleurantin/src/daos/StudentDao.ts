import { Student } from '../model/studentModel';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  ScanCommand
  
} from '@aws-sdk/lib-dynamodb';

const REGION = 'us-east-2';
const ddbClient = new DynamoDBClient({
  region: REGION
});

export interface IStudentDao {
  getAll: (array) => Promise<Student[]>;
  getOne: (aStudent) => Promise<Student | null>;
  add: (aStudent) => Promise<void>;
  update: (aStudent: Student) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

export class StudentDao implements IStudentDao {
  public async add(aStudent: any): Promise<void> {
    await ddbClient.send(new PutCommand(aStudent));
  }

  public async getOne(aStudent: any): Promise<Student | null> {
    const data = await ddbClient.send(new GetCommand(aStudent));
    return data.Item as Student;
  }

  public async update(aStudent: any): Promise<void> {
    await ddbClient.send(new PutCommand(aStudent));
  }

  public async delete(aStudent: any): Promise<void> {
    await ddbClient.send(new DeleteCommand(aStudent));
  }

  public async getAll(array): Promise<Student[]> {
    const data = await ddbClient.send(new ScanCommand(array));
    return data.Items as Student[];
  }
}
