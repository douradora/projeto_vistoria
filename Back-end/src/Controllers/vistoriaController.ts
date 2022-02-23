import { Request, Response } from "express";
import { createVistoriaService } from "../services/vistoriasSevices/createVistoriaService";
import { listVistoriaService } from "../services/vistoriasSevices/listVistoriaService";




export class vistoriaController {
        /**
         * recebe os parametros http e retorna uma resposta caso  sucesso
         *todos os dados devem estar preechidos , caso contrario retorna um erro 
         *  
         *  
         */
        async create(req: Request, res: Response) {
                const { veiculoPlaca,
                        dadosVistoria,
                        id_user,
                        condutorCpf,
                        nome_condutor,
                        obs,
                        destinoId,
                        situacao,
                        tipoVeiculo } = req.body;


                if (!veiculoPlaca ||
                        !dadosVistoria ||
                        !id_user ||
                        !condutorCpf ||
                        !nome_condutor ||
                        !destinoId ||
                        !situacao ||
                        !tipoVeiculo) {
                        throw new Error("dados incompletos para crear");
                };

                const vistoriaCreate = new createVistoriaService();

                const saveVistoria = await vistoriaCreate.execute({
                        veiculoPlaca,
                        id_user,
                        condutorCpf,
                        nome_condutor,
                        obs,
                        destinoId,
                        situacao,
                }, { dadosVistoria, tipoVeiculo });


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
        
        return  res.status(200).send(listando);



        }





}