//Required External Module  imprting project dependencies
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import  Animerouter from './routes/titles';
import Userrouter  from './routes/users';

//configing my environment variables
dotenv.config();
const animeapp = express();


//check to see if node.js loaded the env var port into process.env
//if so, parse it's value as a number type and creates an instance of an express app
//App Var
if(!process.env.PORT){
    process.exit(1);
}

//lets you parse body data
animeapp.use(express.json());

//define my port im working on '6000'
const PORT: number = parseInt(process.env.PORT as string, 10);

//App config  mount the middlewaer func from the packages that are importing into 
//this entry ponit module
//helmet is a collection of 14 small middleware functions that set HTTP response headers
animeapp.use(helmet());

//by mounting cors() enable all CORS requests
animeapp.use(cors());

//parse incoming requests with JSON payloads, which populates request obj 
//with a new body obj containing the parse data
animeapp.use(express.json());

//only use when route starts with '/route name'
//animeapp.use(animeUsers);
//animeapp.use());

/**
 * Server Activation
 */
//send a default url message
animeapp.get('/', (req,res)=>{
    res.send("Now you're cooking with crisco!");
});


  

//tells you the port you're listening on
animeapp.listen(PORT, () =>{
    console.log(`Listening on post ${PORT}`);
})

 animeapp.use('/animeUsers', Userrouter);
 animeapp.use('/animeTitles', Animerouter);
 



