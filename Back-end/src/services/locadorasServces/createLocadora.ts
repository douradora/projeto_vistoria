import { Client } from "../../Prisma/prismaClient";






export class createLocadoraservice{
        async execute(nome_locadora){

            const findLocadora = await Client.locadora.findFirst({where:{nome_locadora}});


            if(findLocadora){
                return findLocadora;

            }else{

                const createLocadora = await Client.locadora.create({
                    data:{
                        nome_locadora
                    }
                })

                return createLocadora;

            }





        }



}


