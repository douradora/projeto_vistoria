import internal from "stream";
import { Client } from "../../Prisma/prismaClient";

export interface Ivtr {
    Placa: string
    Prefixo: string
    quilometragem: number
    combustivel: number
    ModeloId: number
    OPMID: number
    LocadoraId: number


}

export class CreateVtrService {
    async execute({ Placa, Prefixo, quilometragem, combustivel, ModeloId, OPMID, LocadoraId }: Ivtr) {

       
       
        const FindVtr = await Client.veiculo.findFirst({ where: { Placa: Placa, } });
       



        if (FindVtr) {
            return FindVtr;
        } else {
            const FindPrefixo = await Client.veiculo.findFirst({ where: { Prefixo: Prefixo } });
           
            if (FindPrefixo) {
                throw new Error(`este prefixo ja esta associado a o veiculo  Placa: ${FindPrefixo.Placa}`)
            }
            

            const Vtr = await Client.veiculo.create({
                data: {
                    Placa,
                    Prefixo,
                    combustivel,
                    quilometragem,
                    ModeloId,
                    LocadoraId,
                    OPMID
                }


            })

            return Vtr;



        }









    }




}