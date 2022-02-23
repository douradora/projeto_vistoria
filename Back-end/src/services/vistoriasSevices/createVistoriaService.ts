import { ImodeloVistoria } from "../../interfaces/ImodeloVistoria";
import { Client } from "../../Prisma/prismaClient";
import { v4 as uuidV4} from "uuid";

export interface Ivistoria{
    veiculoPlaca:string
    id_user:string
    condutorCpf:string
    nome_condutor:string
    obs:string
    destinoId:string
    situacao:string
       
}
/**
 *  create vistoria and return the same
 *
 * @export
 * @class createVistoriaService
 */
export class createVistoriaService{

        async execute({veiculoPlaca,id_user,condutorCpf,nome_condutor,obs,destinoId,situacao}:Ivistoria,{dadosVistoria,tipoVeiculo}:ImodeloVistoria){
            const Vistoria = Client.vistoria.create(
                {data:{
                    idVistoria:uuidV4(),
                    veiculoPlaca,
                    dados_vistoria:dadosVistoria,
                    id_user,
                    condutorCpf,
                    nome_condutor,
                    obs,
                    destinoId,
                    situacao,
                    tipo_veiculo:tipoVeiculo,
                    }
                
            })

            if(Vistoria instanceof Error){
                throw new Error('nao foi possivel salvar a vistoria')
                            }


        return Vistoria;

        }




    }

