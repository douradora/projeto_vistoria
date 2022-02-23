import { Client } from "../../Prisma/prismaClient";






export class listFuncaoService{
       async execute(){
            const listFunction = await Client.funcao.findMany();
            


            return listFunction;
       }





}