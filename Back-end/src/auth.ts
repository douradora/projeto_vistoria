import { Request,Response,NextFunction } from "express";
import jwt = require("jsonwebtoken");
 
import authConfig from './Config/authConfig.json';


export class auth{
        authHandle(req:Request,res:Response,next:NextFunction){
            const authHeader =req.headers.authorization;

            if(!authHeader)
                return res.status(401).send({error:'no token provided'});
            
                
            const parts = authHeader.split(' ');


            //lembra do !parts
            if( parts.length === 2)
                return res.status(401).send({error:'token error'});


               
            const [scheme, token] =parts;
            
            
            if(!/^Bearer$/i.test(scheme))
                return res.status(401).send({error: 'badly formatted token'});
        
         
            jwt.verify(token,authConfig.secret)    
            
                
                



        }





}