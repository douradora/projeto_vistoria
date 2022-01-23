import { compare } from "bcryptjs";
import { Client } from "../Prisma/prismaClient";




export class LoginService {

    async execute({ cpf_user, password }) {

        const User =  await  Client.user.findFirst({where:{cpf_user:cpf_user}});

    


        if (!User)
            throw new Error("usuario ou senha incorretos");

        const result = await compare(password, `${User.password}`)
        
        if (result) {
            return User;
        } else {
            throw new Error("usuario ou senha incorretos");

        }

    }

}