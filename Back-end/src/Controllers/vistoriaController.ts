import { Request, Response } from "express";
import { CreateVtrService } from "../services/veiculosServices/CreateVtrService";
import { createVistoriaService } from "../services/vistoriasSevices/createVistoriaService";
import { listVistoriaService } from "../services/vistoriasSevices/listVistoriaService";
import { photoController } from "./photosControler";





export class vistoriaController {
        /**
         * recebe os parametros http e retorna uma resposta caso  sucesso
         *todos os dados devem estar preechidos , caso contrario retorna um erro 
         *  
         *  
         */
        async create(req: Request, res: Response) {
                
                const vistoriaCreate = new createVistoriaService();
                const savePhotos = new photoController();
               


                const { veiculo_placa,
                        veiculo_prefixo,
                        veiculo_opm,
                        veiculo_marca,
                        veiculo_modelo,
                        veiculo_combustivel,
                        veiculo_quilometragem,
                        veiculo_locadora,
                        dados_vistoria,
                        id_user,
                        condutor_cpf,
                        condutor_nome,
                        obs,
                        destino_id,
                        situacao,
                        tipo_veiculo } = req.body;
             
                  if (!veiculo_placa ||
                        !dados_vistoria||
                        !veiculo_combustivel||
                        !veiculo_locadora||
                        !veiculo_quilometragem||
                        !veiculo_opm||
                        !veiculo_marca||
                        !veiculo_modelo||
                        !veiculo_prefixo||
                        !id_user ||
                        !condutor_cpf ||
                        !condutor_nome ||
                        !destino_id ||
                        !situacao ||
                        !tipo_veiculo) {
                        throw new Error("dados incompletos para salvar vistoria");
                };

                
                const find_or_create_vtr = await new CreateVtrService().execute({
                                placa:veiculo_placa,
                                prefixo:veiculo_prefixo,
                                modelo_id:veiculo_modelo,
                                opm_id:veiculo_opm,
                                locadora_id:veiculo_locadora});
               

                
                if(!find_or_create_vtr){
                        throw new Error("nao foi possivel encontra ou salvar esse veiculo")
                        
                }

                const id_photos_fk = await savePhotos.create(req.files,veiculo_placa);
              
                if(!id_photos_fk){
                        throw new Error("nao foi possivel salvar as photos,vistoria nao foi criada")
                }
                const saveVistoria = await vistoriaCreate.execute({
                        veiculo_placa,
                        veiculo_combustivel,
                        veiculo_quilometragem,
                        id_user,
                        condutor_cpf,
                        condutor_nome,
                        obs,
                        destino_id,
                        situacao,
                        id_photos_fk
                }, { dados_vistoria, tipo_veiculo });

                

                return res.status(200).send({ saveVistoria })






        }



        find() {




        }

        /**
         * apenas lista todas as vistorias ,ja salvas . nao recebe nenhum paramentro no req, apenas retorna vistoria caso exista
         * 
         */
        async listvistoria(req:Request,res:Response) {

         const list =  new  listVistoriaService();
         const listando  = await list.listEvery();
        
        return  res.status(200).send({listando});



        }





}