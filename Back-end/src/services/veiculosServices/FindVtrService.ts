import { response } from "express";
import { Client } from "../../Prisma/prismaClient";


export class FindVtrService{
        async execute(dado){
           
         if(dado===undefined){
             const Find  = await Client.veiculo.findMany();
        
             return Find;
          }else{
            
            
        const Find  = await Client.veiculo.findFirst({where:{placa:dado}});

        
        return Find;

        }

       



        }




}