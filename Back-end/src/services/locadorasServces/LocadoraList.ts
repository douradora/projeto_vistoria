
import { Client } from "../../Prisma/prismaClient";

export interface Ilocadora {
    id?: number,
    name?: string



}



export class LocadoraList {

    async execute() {

    

        const locadoras = await Client.locadora.findMany()


        return locadoras;



    }





}