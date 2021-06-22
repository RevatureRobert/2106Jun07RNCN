import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import MemeDao from '@daos/Memes/MemeDao';
import { paramMissingError } from '@shared/constants';

const memeDao = new MemeDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all memes.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllMemes(req: Request, res: Response) {
    const memes = await memeDao.getAll();
    return res.status(OK).json({memes: memes});
}

/**
 * Get random meme.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getRandomMeme(req: Request, res: Response) {
    let type = req.params;
    const memes = await memeDao.getRandom(String(type));
    return res.status(OK).json({memes: memes});
}


/**
 * Add one meme.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneMeme(req: Request, res: Response) {
    const { meme } = req.body;
    console.log(meme);
    if (!meme) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await memeDao.add(meme);
    return res.status(CREATED).end();
}


/**
 * Update one meme.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneMeme(req: Request, res: Response) {
    const { meme } = req.body;
    if (!meme) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await memeDao.add(meme);
    return res.status(OK).end();
}


/**
 * Delete one meme.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneMeme(req: Request, res: Response) {
    const { id } = req.params;
    await memeDao.delete(Number(id));
    return res.status(OK).end();
}