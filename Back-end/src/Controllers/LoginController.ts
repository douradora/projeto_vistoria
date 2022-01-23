import { sign } from "jsonwebtoken";
import { Response, Request, NextFunction, json } from "express";
import { LoginService } from "../services/LoginService";
import authconfig from "../Config/authConfig.json"




export class LoginController {


    async handle(req: Request, res: Response) {
            const {cpf,password} =req.body;

            if(!cpf||!password)
                throw new Error("informe cpf e senha")
            
            const login = new LoginService();


            const user = await login.execute({cpf_user:cpf,password:password})
            const token = sign({},authconfig.secret,{subject:user.cpf_user, expiresIn:"20s"});


            res.status(200).send({
                name:user.name,
                email:user.email,
                cpf:user.cpf_user,
                token


            });


    }
}
