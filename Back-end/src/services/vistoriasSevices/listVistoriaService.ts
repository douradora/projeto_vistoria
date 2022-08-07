import { Client } from "../../Prisma/prismaClient";
import { Ivistoria } from "./createVistoriaService";



export class listVistoriaService{
     /**
      * 
      * @param table 
      * @param dada 
      * @returns 
      */
    async FindList(table,dada){

        const listVistoria = await Client.$queryRaw`SELECT * FROM Vistoria WHERE ${table}=${dada}`;

        return listVistoria;

        }

    /**
     * 
     * @returns todas as vistorias salvas em banco
     */    
   async listEvery(){
        const listEveryVistorias = await Client.vistoria.findMany({include:{Photos:{select:{url_photos:true}}}})
      

        
        
   
        
        return listEveryVistorias;

       
   }

    }








