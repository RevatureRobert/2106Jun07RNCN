import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import {getCharacters} from '@daos/Character/CharacterDao';
import { paramMissingError } from '@shared/constants';
import logger from '@shared/Logger';

/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getAllCharacters(req: Request, res: Response) {
    const characters = await getCharacters();
    console.log(characters);
    return res.status(StatusCodes.OK).json({characters});
}