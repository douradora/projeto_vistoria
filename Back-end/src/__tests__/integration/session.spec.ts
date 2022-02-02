

import { createModeloVeiculoService } from "../../services/modeloVeiculosSevice/createModeloVeiculoService";
import { CreateUserService } from "../../services/userServices/CreateUserSevice"




describe("testes de criacao de usuario",()=>
    it("CREAR usuario",async ()=>{
    
         
   const user =  new createModeloVeiculoService();
   
   const sevice =await user.execute({
      modelo:"aventador",
      montadora:"Lamborguine"
              })

        expect(sevice).toHaveProperty('idModelo');

    })

)