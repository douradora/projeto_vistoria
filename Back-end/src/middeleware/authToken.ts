import { Request,Response,NextFunction } from "express";
import {verify} from "jsonwebtoken";
 import authConfig from '../Config/authConfig.json';



/**
 *
 * 
 */
export function authToken(req:Request,res:Response,next:NextFunction){
            const authHeader =req.headers.authorization;
            
            if(!authHeader)
                return res.status(401).send({message:'no token provided'});
            
                
            const parts = authHeader.split(' ');


           
            if( !(parts.length === 2))
                return res.status(401).send({message:'token error'});


               
            const [scheme, token] =parts;
            
            
            if(!/^Bearer$/i.test(scheme))
                return res.status(401).send({message: 'badly formatted token'});
        
            try{
            verify(token,authConfig.secret);
            
            return next();
            }catch(err){
                res.status(401).json({
                    message:"error token"
                })
            }
        
        }


