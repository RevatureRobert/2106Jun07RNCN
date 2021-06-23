const {getTitles,deleteTitlesById,addOrUpdateTitles} = require( '../dynamodb');
import { Request, Response } from 'express';


/**
 *here are my controllers to be exported to titles 
 *routes files 
 */




export const oneTitle = async (req:Request,res:Response)=>{
    const id = req.params.id;
    try{
        const titles = await getTitles(id);
        res.json(titles);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Oh no you broke something'});
    }
}


export const allTitles = async(req:Request,res:Response)=>{
const id = req.params.id;
try{
    const titles = await getTitles(id);
    res.json(titles);
}catch(error){
    console.error(error);
    res.status(500).json({error: 'Oh no you broke something 2'});
}
}

export const newTitle = async (req:Request,res:Response)=>{
const title = req.body;
try{
    const newTitle = await addOrUpdateTitles(title);
    res.json(newTitle);
}catch(error){
    console.error(error);
    res.status(500).json({error: 'Oh no stop touching stuff you broke it!'});
}
}


export const delTitle = async(req:Request,res:Response) =>{
    const id = req.params.id;
    try{
        const titles = await deleteTitlesById(id);
        res.json(titles);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Oh no you broke something 3'});
    }
}


module.exports = {
     delTitle,
     newTitle,
     allTitles,
     oneTitle
}   
    
                             