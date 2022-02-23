
import { Client } from "../../Prisma/prismaClient";

export interface Ivtr {
    placa: string
    prefixo: string
    quilometragem: number
    combustivel: number
    modeloId: number
    OPMID: number
    locadoraId: number


}

export class CreateVtrService {
    /**
     * 
     * @param 
     * @returns 
     */
    
    async execute({ placa, prefixo, quilometragem, combustivel, modeloId, OPMID, locadoraId }: Ivtr) {

       
       
        const FindVtr = await Client.veiculo.findFirst({ where: { placa: placa, } });
       



        if (FindVtr) {
            return FindVtr;
        } else {
            const FindPrefixo = await Client.veiculo.findFirst({ where: { prefixo: prefixo } });
           
            if (FindPrefixo) {
                throw new Error(`este prefixo ja esta associado a o veiculo  Placa: ${FindPrefixo.placa}`)
            }
            

            const Vtr = await Client.veiculo.create({
                data: {
                    placa,
                     combustivel,
                     prefixo,
                     quilometragem,
                     OPMID,
                     locadoraId,
                     modeloId
                }


            })

            return Vtr;



        }









    }




}