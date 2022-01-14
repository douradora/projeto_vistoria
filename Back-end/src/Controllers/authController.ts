import {compare}from "bcryptjs" ;
import { Response,Request,NextFunction } from "express";
import { getRepository } from "typeorm";
import { login } from "../entites/user";

import {userLoad} from "../services/userLoad";




export class authcontroller{
    
   
     async  handle(req:Request,res:Response){
       
        const {login,password} =req.body;
        const usuario = userLoad
       




     if(!CpfUser)
        throw Error("usuario nao existe");


       
     
        const auth=compare(password,Senha);
         if(auth){
          
            return res.json();
        }else{
            return new Error("senha incorreta")

        }

        
     
      


        



    }

}



