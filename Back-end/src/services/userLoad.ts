import { getRepository } from "typeorm";
import { login } from "../entites/user";




export  class userLoad{

     async execute(id:string) {
        const repo = getRepository(login)
        
        const user = await repo.findOne(id)
     
        return user;
        
    }


}