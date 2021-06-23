import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { SchoolDao } from '../daos/SchoolDao';

const schoolDao = new SchoolDao();

const schoolId = uuid();

// const school = new School();

const TABLE_NAME = 'school-district';

export const addSchool = async (req: Request, res: Response) => {
  try {
    let bodyJson = req.body;
    let schoolName: string = bodyJson.schoolName;
    let district: string = bodyJson.district;
    let mascot: string = bodyJson.mascot;

  
    await schoolDao.add({
      TableName: TABLE_NAME,
      Item: {
        PK: `SCH#${schoolId}`,
        SK: `#METADATA#${schoolId}`,
        name: schoolName,
        mascot: mascot,
        district: district
        
      },
      ConditionExpression: "attribute_not_exists(PK)",
      
    });

    // console.log('My data: ', data);
    res.status(200).json({
      status: 'success',
      data: {
        school: 'School added'
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSchool = async (req: Request, res: Response) => {
  try {
    let schoolId = req.params.id;

    const data = await schoolDao.getOne({
      TableName: TABLE_NAME,
      Key: {
        PK: `SCH#${schoolId}`,
        SK: `SCH#${schoolId}`.replace('SCH', '#METADATA')    
      }
    });
    console.log('jfjffj: ', data);
    res.status(200).json({
      status: 'success',
      data: data
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateSchool = async (req: Request, res: Response) => {
  try {
    let schoolId = req.params.id;
    console.log(schoolId);
    let bodyJson = req.body;
    let schoolName: string = bodyJson.schoolName;
    let district: string = bodyJson.district;

    let mascot: string = bodyJson.mascot;

    const data = await schoolDao.update({
      TableName: TABLE_NAME,
      Item: {
        PK: `SCH#${schoolId}`,
        SK: `#METADATA#${schoolId}`,
        name: schoolName,
        mascot: mascot,
        district: district
        
      }
    });

    console.log('jfjffj: ', data);
    res.status(200).json({
      status: 'success',
      data: 'School updated'
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSchool = async (req: Request, res: Response) => {
  try {
    let schoolId = req.params.id;
    console.log(schoolId);

    await schoolDao.delete({
      TableName: TABLE_NAME,
      Key: {
        PK: `SCH#${schoolId}`,
        SK: `SCH#${schoolId}`.replace('SCH', '#METADATA')      
      }
    });

    res.status(200).json({
      status: 'Success',
      data: `School with id of SCH${schoolId} deleted`
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllSchools = async (req: Request, res: Response) => {
  try {
    const data = await schoolDao.getAll({
      TableName: TABLE_NAME,
      FilterExpression: 'begins_with(PK, :PK)',
      ExpressionAttributeValues: {
        ':PK': `SCH#`
      },
      ProjectionExpression: 'schoolName, district, mascot'
    });
    res.status(200).json({
      status: 'Success',
      data: data
    });
  } catch (error) {
    console.log(error);
  }
};
