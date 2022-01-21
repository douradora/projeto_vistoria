import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import { user } from "../entites/user";
import { IUSerRequest } from "../interfaces/Iuser";



export class LoginService {

    async execute({ cpf, password }) {

        const repo = getRepository(user)

        const User = await repo.findOne(cpf);


        if (!User)
            throw new Error("usuario ou senha incorretos");

        const result = await compare(password, `${User.password}`)
        
        if (!result) 
            throw new Error("usuario ou senha incorretos");
       
    
        return User;
    }

}