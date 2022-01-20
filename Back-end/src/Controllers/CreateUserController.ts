import { Request,Response } from "express";
import { CreateUserService } from "../services/CreateUserSevice";


export class CreateUserController{
    
    async handle(req:Request,res:Response){
            const {cpf_user,email,password,name} =req.body;

            const create = new CreateUserService();

            const result = await  create.execute({cpf_user,name,email,password});

            if(result instanceof Error)
                throw new Error("usuario nao salvo algo de errado aconteceu");
            
                

        
            return res.status(200).send({"message":"usuario cadastrado"});


    }








}