import { Client } from "../../Prisma/prismaClient";






export class createLocadoraservice{
        async execute(NomeLocadora){

            const findLocadora = await Client.locadora.findFirst({where:{NomeLocadora}});


            if(findLocadora){
                return findLocadora;

            }else{

                const createLocadora = await Client.locadora.create({
                    data:{
                        NomeLocadora
                    }
                })

                return createLocadora;

            }





        }



}


