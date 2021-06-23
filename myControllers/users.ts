const {addOrUpdateUsers,deleteUser,getUsersById} = require( '../dynamodb');
import { Request, Response } from 'express';


/**
 * here are all my controllers that will be exported 
 * to my users routers file
 */


export const userIndex = async (req:Request,res:Response)=> {
    const id = req.params.id;
    try{
        const user = await getUsersById(id);
        res.json(user);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Oh no you broke something'});
    }
}

export const addUser =async (req:Request,res:Response)=>{
    const user = req.body;
    try{
        const newUser = await addOrUpdateUsers(user);
        res.json(newUser);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Oh no stop touching stuff you broke it!'});
    }
}


export const updateUser = async (req:Request,res:Response)=>{
    const users = req.body;
    const {id} = req.params;
    users.id = id;
    try{
        const updatedUser = await addOrUpdateUsers(users);
        res.json(updatedUser);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Oh no stop touching stuff you broke it!'});
    }
}

export const delUser = async(req:Request,res:Response)=>{
    const id = req.params;
    try{
        const users = await deleteUser(id);
        res.json(users);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Oh no you broke something'});
    }
}


module.exports ={
    delUser,
    addUser,
    updateUser,
    userIndex,
    
    
}