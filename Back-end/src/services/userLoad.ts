import { getRepository } from "typeorm";
import { login } from "../entites/user";




export  class userLoad{

     async execute(id) {
        const repo = getRepository(login)
        const login = await repo.findByIds([id])

        return login;
    
    }


}