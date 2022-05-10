
import { Client } from "../../Prisma/prismaClient";

export interface Ivtr {
    placa: string
    prefixo: string
    modelo_id: number
    opm_id: number
    locadora_id: number


}

export class CreateVtrService {
    /**
     * 
     * @param 
     * @returns 
     */
    
    async execute({ placa, prefixo, modelo_id, opm_id, locadora_id }: Ivtr) {

       
       
        const FindVtr = await Client.veiculo.findFirst({ where: { placa: placa, } });
       



        if (FindVtr) {
        
            
         return FindVtr;
        } else {
            //caso nao exista a placa da vtr e tente cadastra com um prefixo ja existente
            const FindPrefixo = await Client.veiculo.findFirst({ where: { prefixo: prefixo } });
           
            if (FindPrefixo) {
                throw new Error(`este prefixo ja esta associado a o veiculo  Placa: ${FindPrefixo.placa}`)
            }
            

            const vtr = await Client.veiculo.create({data:{
                placa,
                prefixo,
                opm_id,
                locadora_id,
                modelo_id

            }})

            return vtr;



        }









    }




}