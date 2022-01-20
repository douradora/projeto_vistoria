import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import { user } from "../entites/user";
import { IUSerRequest } from "../interfaces/Iuser";



export class LoginService {

    async execute({ cpf_user, password }: IUSerRequest) {

        const repo = getRepository(user)

        const User = await repo.findOne(cpf_user);


        if (!User)
            throw new Error("usuario ou senha incorretos");

        const result = await compare(password, `${User.password}`)
        
        if (result) {
            return user;
        } else {
            throw new Error("usuario ou senha incorretos");

        }

    }

}