import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import {getCharacters, addOrUpdateCharacter, getCharacter, deleteCharacter,getCharbyPlayer, getCharbyLocation, levelCharacter} from '@daos/Character/CharacterDao';
import { paramMissingError } from '@shared/constants';
import logger from '@shared/Logger';
import { Character } from '@entities/Character';
import { normalize } from 'path/posix';

/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getAllCharacters(req: Request, res: Response) {
    const characters = await getCharacters();
    return res.status(StatusCodes.OK).json({characters});
}
/**
 * Get all users with the specified player
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getCharacterbyPlayer(req: Request, res: Response) {
    const characters = await getCharbyPlayer(req.params.player);
    return res.status(StatusCodes.OK).json({characters});
}
/**
 * Get all users at the specified location
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getCharacterbyLocation(req: Request, res: Response) {
    const characters = await getCharbyLocation(req.params.loc);
    return res.status(StatusCodes.OK).json({characters});
}
/**
 * Add or update a character
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function addOrUpdateChar(req: Request, res: Response) {
    console.log(req.body);
    const characters = await addOrUpdateCharacter(Character.prototype.normalize(req.body));

    return res.status(StatusCodes.OK).json({characters});
}

/**
 * Get a specific user by id
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getChar(req: Request, res: Response) {
    console.log(req.params.id);
    const character = await getCharacter(req.params.id);
    console.log(character);
    return res.status(StatusCodes.OK).json({character});
}

/**
 * Delete a specific user by id
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function deleteChar(req: Request, res: Response) {

    const character = await deleteCharacter(req.params.id);
    console.log(character);
    return res.status(StatusCodes.OK).json({character});
}
/**
 * Add a specific amount of exp to a player, levelling them if they get above 100
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function levelChar(req: Request, res: Response) {
    const character = await levelCharacter(req.params.char, req.params.exp);
    console.log(character);
    return res.status(StatusCodes.OK).json({character});
}
