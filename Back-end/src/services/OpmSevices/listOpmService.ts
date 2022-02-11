import { Client } from "../../Prisma/prismaClient";




export class listOpmService{
    async execute(){
        const opms = await Client.opm.findMany();

           return opms;
    }
}




