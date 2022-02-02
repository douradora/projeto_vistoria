import { Client } from "../../Prisma/prismaClient";
import { hash } from "bcryptjs";
import  {IUSerRequest} from '../../interfaces/Iuser';




export class CreateUserService {

    async execute({ cpf_user, name, email, password }: IUSerRequest) {


        const findCpfExists = await Client.user.findFirst({where:{cpf_user:cpf_user}});

        const findemailExists = await Client.user.findFirst({where:{email:email}});
        
        if (findCpfExists)
            throw new Error("cpf ja cadastrado");
        
            if (findemailExists)
            throw new Error("email esta em uso por outro usuario");

        const PW = await hash(password, 10);

        const User = await Client.user.create( {
            data:{cpf_user,
            name,
            email,
            password: PW
        }

        });


        return User;


    }


}