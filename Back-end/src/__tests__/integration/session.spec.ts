

import { createModeloVeiculoService } from "../../services/modeloVeiculosSevice/createModeloVeiculoService";
import { CreateUserService } from "../../services/userServices/CreateUserSevice"




describe("testes de criacao de usuario",()=>
    it("CREAR usuario",async ()=>{
    
         
   const user =  new CreateUserService()
   
   const sevice =await user.execute({
 cpf_user:'0676673',
 email:"ramondgc@gmail.com",
 name:"ramon do",
 password:"rdb123"
              })

        expect(sevice).toHaveProperty('cpf_user');

    })

)