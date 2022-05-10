import { Client } from "../../Prisma/prismaClient";
export interface Iopm{
    nome_opm,
    comando



}



export class    createOpmServices{
    async execute({nome_opm,comando}:Iopm) {
        const findOpm  =await Client.opm.findFirst({where:{nome_opm:nome_opm}});


        if(findOpm){
            return findOpm;
        }else{
        const opm = await Client.opm.create({data:{
            nome_opm,
           comando_opm:comando
        }}
              
        );
        if(!opm){
            throw new Error("erro ao salvar dados");

        }

        return opm;
            


        }

    }


}