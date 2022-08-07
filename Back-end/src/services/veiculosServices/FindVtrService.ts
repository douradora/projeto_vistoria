import { Client } from "../../Prisma/prismaClient";


export class FindVtrService {
        async execute(dado) {

                if (dado === undefined) {
                        const FindAll = await Client.veiculo.findMany({
                                select:{
                                        placa:true,
                                        prefixo:true,
                                        locadora:{ select: { nome_locadora: true } },
                                        Opm:{ select: { nome_opm: true,comando_opm:true } },
                                        modelo_veiculo:{ select: { modelo: true, montadora: true } }},
                               
                        })

        



                        return FindAll;
                }

                if (dado) {
                        const FindSign = await Client.veiculo.findUnique({where:{placa:dado},
                                select:{
                                        placa:true,
                                        prefixo:true,
                                        locadora:{ select: { nome_locadora: true } },
                                        Opm:{ select: { nome_opm: true,comando_opm:true } },
                                        modelo_veiculo:{ select: { modelo: true, montadora: true } }},
                               
                        })

                        if(!FindSign){
                                return [];
                        }

                      return FindSign;

                }

        }




}