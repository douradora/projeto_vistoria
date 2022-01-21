import { Response, Request, } from "express";
import {sign} from "jsonwebtoken";
import { LoginService } from "../services/LoginService";
import  authconfig from "../Config/authConfig.json";



export class LoginController {


    async handle(req: Request, res: Response) {
        const { cpf, password } = req.body;

        if(!cpf||!password)
            throw new Error("forneça CPF E SENHA");
            


        const logIN = new LoginService();

        const {cpf_user,name,email} = await logIN.execute({ cpf, password });

        if (!cpf_user)
            throw new Error('nao foi possivel logar')


        
        const Token= sign({id: cpf_user,email:email},authconfig.secret,{expiresIn:'100s'})
       
        
        
        return res.status(200).send(
            {
                cpf_user,
                email,
                name,
                Token})



    }
}
