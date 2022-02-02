import { Client } from "../../Prisma/prismaClient";
import { Ivistoria } from "./createVistoriaService";



export class listVistoriaService{
    async execute(table,dada){

        const listVistoria = await Client.$queryRaw`SELECT * FROM Vistoria WHERE ${table}=${dada}`;




        return listVistoria;





        }



    }








