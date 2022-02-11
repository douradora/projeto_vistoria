

import { Client } from "../../Prisma/prismaClient";
import { createModeloVeiculoService } from "../../services/modeloVeiculosSevice/createModeloVeiculoService";
import { CreateUserService } from "../../services/userServices/createUserSevice"




describe("testes de criacao de usuario",()=>
    

it("CREAR usuario",async ()=>{
    
         
   const user =  new CreateUserService()
   
   const sevice =await user.execute({
 cpf_user:'0676673',
 email:"ramondgc@gmail.com",
 name:"ramon do",
 password:"rdb123",
 adm:true
              })

        expect(sevice).toHaveProperty('cpf_user');

    })


)