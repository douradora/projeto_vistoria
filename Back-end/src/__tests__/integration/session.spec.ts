import { createConnection } from "typeorm";
import { CreateUserService } from "../../services/CreateUserSevice"



createConnection('default');

describe("testes de criacao de usuario",()=>
    it("CREAR usuario",async ()=>{
    
   const user =  new  CreateUserService();
   
   const sevice =await user.execute({
        
         cpf_user:'05828367510',
         email:'ramon@gmail.com',
         name:'ramon dourado',
         password: 'rdb123'



        })

        expect(sevice).toHaveProperty('cpf_user');

    })

)