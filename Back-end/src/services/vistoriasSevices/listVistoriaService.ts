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
        const listEveryVistorias = await Client.$queryRaw`
          SELECT * From Vistoria INNER JOIN photos  on Vistoria.id_photos_fk = photos.id_photos
        
        `;
        
        return listEveryVistorias;

       
   }

    }








