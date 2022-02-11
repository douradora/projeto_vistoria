import { Client } from "../../Prisma/prismaClient";
export interface Iopm{
    nomeOpm,
    comando



}



export class    createOpmServices{
    async execute({nomeOpm,comando}:Iopm) {
        const findOpm  =await Client.opm.findFirst({where:{NomeOpm:nomeOpm}});


        if(findOpm){
            return findOpm;
        }else{
        const opm = await Client.opm.create({data:{
            NomeOpm:nomeOpm,
            ComandoOpm:comando
        }}
              
        );
        if(!opm){
            throw new Error("erro ao salvar dados");

        }

        return opm;
            


        }

    }


}