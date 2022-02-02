import { ImodeloVistoria } from "../../interfaces/ImodeloVistoria";
import { Client } from "../../Prisma/prismaClient";

export interface Ivistoria{
    VeiculoPlaca:string
    id_user:string
    CondutorCpf:string
    Nome_condutor:string
    Obs:string
    destinoId:number
    situacaoId:number
       
}

export class createVistoriaService{

        async execute({VeiculoPlaca,id_user,CondutorCpf,Nome_condutor,Obs,destinoId,situacaoId}:Ivistoria,{dadosVistoria,tipoVeiculo}:ImodeloVistoria){
            const Vistoria = Client.vistoria.create(
                {data:{
                    VeiculoPlaca,
                    Dados_vistoria:dadosVistoria,
                    id_user,
                    CondutorCpf,
                    Nome_condutor,
                    Obs,
                    destinoId,
                    situacaoId,
                    tipo_veiculo:tipoVeiculo,
                    }
                
            })

            if(Vistoria instanceof Error){
                throw new Error('nao foi possivel salvar a vistoria')
                            }


        return Vistoria;

        }




    }

