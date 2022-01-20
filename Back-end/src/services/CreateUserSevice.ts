import { getRepository } from "typeorm";
import { user } from "../entites/user"
import { hash } from "bcryptjs";
import  {IUSerRequest} from '../interfaces/Iuser';



export class CreateUserService {

    async execute({ cpf_user, name, email, password }: IUSerRequest) {

        if(!cpf_user||!email||!name||!password)
            throw new Error('Todos os campos devem ser preechidos');

        const repo = getRepository(user);

        if (await repo.findOne(cpf_user))
            throw new Error("cpf ja cadastrado");
        if (await repo.findOne(email))
            throw new Error("email esta em uso por outro usuario");

        const PW = await hash(password, 10);

        const User = repo.create({
            cpf_user,
            name,
            email,
            password: PW

        });


        await repo.save(User);


        return User;


    }


}