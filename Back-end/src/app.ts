import "dotenv/config";
import "express-async-errors";
import "reflect-metadata";
import express, { NextFunction,Response,Request } from "express";
import cors from 'cors'

import { routes } from "./routes/routes";


const app =express();
app.use(cors())
app.use(express.json());
app.use(routes);

/** 
 * @Error cacht errors in this aplication
 * @res  return the errors like a json
 */
app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{

    
    return res.json({
        status:"Error",
        message:err.message,
        
        
    })
}
);

export {app};