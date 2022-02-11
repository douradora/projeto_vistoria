import { Client } from "../../Prisma/prismaClient";




export class createFuncaoService{
        async execute(nome_funcao){
       
            const findFuncao = await Client.funcao.findFirst({where:{nome_funcao}});


            if(findFuncao){
                return findFuncao

            }else{
                const createFunction = await Client.funcao.create({data:{
                    nome_funcao


                }})

                return createFunction;


            }






        }




}