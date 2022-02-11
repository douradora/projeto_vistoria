
import { Client } from "../../Prisma/prismaClient";

export interface Ilocadora {
    id?: number,
    name?: string



}



export class locadoraList {

    async execute() {

    

        const locadoras = await Client.locadora.findMany()


        return locadoras;



    }





}