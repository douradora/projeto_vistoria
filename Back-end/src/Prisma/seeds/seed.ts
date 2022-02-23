import { Client } from "../prismaClient";
import { funcoes } from "../seeds_models/seedsModels";


async function main() {
   
    funcoes.forEach(async (funcao)=>{

     await  Client.funcao.create({data:{
        id_funcao:funcao.id,
        nome_funcao:funcao.nome

       }})


    })}


main().catch((e)=>{
    console.error(e)
    process.exit(1)
}).finally(async ()=>{
    await Client.$disconnect()
})