import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { StudentDao } from '../daos/StudentDao';

// import {
//   DynamoDBClient,
//   GetItemCommand,
//   PutItemCommand,
//   ScanCommand
// } from '@aws-sdk/client-dynamodb';

// const REGION = 'us-east-2';
// const ddbClient = new DynamoDBClient({
//   region: REGION
// });

const studentDao = new StudentDao();

const studentId = uuid();

const TABLE_NAME = 'school-district';

export const addStudent = async (req: Request, res: Response) => {
  try {
    let bodyJson = req.body;
    let firstName: string = bodyJson.firstName;
    let lastName: string = bodyJson.lastName;
    let phone: string = bodyJson.phone;
    let grade_year: string = bodyJson.grade_year;
    let gender: string = bodyJson.gender;

    await studentDao.add({
      TableName: TABLE_NAME,
      Item: {
        PK: `STU#${studentId}`,
        SK: `#METADATA#${studentId}`,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        grade_year: grade_year,
        gender:gender
      },
      ConditionExpression: "attribute_not_exists(PK)",
    });
    res.status(200).json({
      status: 'success',
      data: {
        student: 'Student added'
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStudent = async (req: Request, res: Response) => {
  try {
    let studentId = req.params.id;

    const data = await studentDao.getOne({
      TableName: TABLE_NAME,
      Key: {
        PK: `STU#${studentId}`,
        SK: `STU#${studentId}`.replace('STU', '#METADATA')
      }
    });
    res.status(200).json({
      status: 'success',
      data: data
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    let studentId = req.params.id;
    let bodyJson = req.body;
    let firstName: string = bodyJson.firstName;
    let lastName: string = bodyJson.lastName;
    let phone: string = bodyJson.phone;
    let grade_year: string = bodyJson.grade_year;
    let gender: string = bodyJson.gender;

    await studentDao.update({
      TableName: TABLE_NAME,
      Item: {
        PK: `STU#${studentId}`,
        SK: `#METADATA#${studentId}`,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        grade_year: grade_year,
        gender: gender
      }
    });
    res.status(200).json({
      status: 'success',
      data: 'Student Profile Updated'
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    let studentId = req.params.id;

    await studentDao.delete({
      TableName: TABLE_NAME,
      Key: {
        PK: `STU#${studentId}`,
        SK: `STU#${studentId}`.replace('STU', '#METADATA')
      }
    });
    res.status(200).json({
      status: 'Success',
      data: `School with id of SCH${studentId} deleted`
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const data = await studentDao.getAll({
      TableName: TABLE_NAME,
      FilterExpression: 'begins_with(PK, :PK)',
      ExpressionAttributeValues: {
        ':PK':`STU#`
      },
      ProjectionExpression: 'firstName, lastName, phone, grade_year, age'
    });

    res.status(200).json({
      status: 'Success',
      data: data
    });
  } catch (error) {
    console.log(error);
  }
};
