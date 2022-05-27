import { ImodeloVistoria } from "../../interfaces/ImodeloVistoria";
import { Client } from "../../Prisma/prismaClient";
import { v4 as uuidV4} from "uuid";
import { parse } from "path";

export interface Ivistoria{
    veiculo_placa:string
    veiculo_combustivel
    veiculo_quilometragem
    id_user:string
    condutor_cpf:string
    condutor_nome:string
    obs:string
    destino_id:string
    situacao:string
    id_photos_fk:string
    
       
}
/**
 *  create vistoria and return the same
 *
 * @export
 * @class createVistoriaService
 */
export class createVistoriaService{

        async execute({veiculo_placa,veiculo_combustivel,veiculo_quilometragem, id_user,condutor_cpf,condutor_nome,obs,destino_id,situacao,id_photos_fk}:Ivistoria,{dados_vistoria,tipo_veiculo}:ImodeloVistoria){
           
            

            const Vistoria = Client.vistoria.create(
                {data:{
                    id_vistoria:uuidV4(),
                    veiculo_placa,
                    veiculo_combustivel:parseFloat(veiculo_combustivel),
                    veiculo_quilometragem:parseInt(veiculo_quilometragem),
                    dados_vistoria,
                    id_user,
                    condutor_cpf,
                    condutor_nome,
                    obs,
                    destino_id,
                    situacao,
                    tipo_veiculo,
                    id_photos_fk
                    }
                
            })

            if(Vistoria instanceof Error){
                throw new Error('nao foi possivel salvar a vistoria')
                            }


        return Vistoria;

        }




    }

