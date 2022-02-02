import { response } from "express";
import { Client } from "../../Prisma/prismaClient";


export class FindVtrService{
        async execute(dado){
            console.log(dado);
         if(dado===undefined){
             const Find  = await Client.veiculo.findMany();
        
             return Find;
          }else{
            
            
        const Find  = await Client.veiculo.findFirst({where:{Placa:dado}});

        
        return Find;

        }

       



        }




}