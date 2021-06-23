import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import DropsDao from '../daos/drops/DropsDao';
import { IMonsterDrops } from '../entities/Drops';

const dao = new DropsDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getItem(req: Request, res: Response) {
    const {dropName} = req.body;
    //Check if that specific dropName is in DB
    if(!(dropName)){
        return res.status(BAD_REQUEST).json({
            error: "Missing DropName Parameter",
        });
    }
    //Returns Item information to server
    let drop:IMonsterDrops|null = await dao.getOne(dropName);
    return res.status(OK).json(drop).end();
}

export async function addItem(req: Request, res: Response){
    let drop = req.body;
    console.log(typeof drop);
    if(!drop){
        return res.status(BAD_REQUEST).json({
            error: "Missing 1 or more parameters"
        });
    }
    await dao.add(drop);
    return res.status(CREATED).end();
}