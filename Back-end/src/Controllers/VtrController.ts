import { Ivtr, CreateVtrService } from "../services/veiculosServices/CreateVtrService"
import { Request, Response } from "express";
import { FindVtrService } from "../services/veiculosServices/FindVtrService";
import { idText } from "typescript";




export class vtrController {
        /**
         * create a new vtr and return the data, if already exist the data return the same
         * @param req 
         * @param res 
         * @returns 
         */
       
        async create(req: Request, res: Response) {
                const { locadoraId, modeloId, OPMID, placa, prefixo, combustivel, quilometragem } = req.body;

                if (!locadoraId || !modeloId || !OPMID || !placa || !prefixo || !combustivel || !quilometragem){
                        throw new Error("dados Imcompletos para cadastro de Veiculo")
                }

                const createVtr = new CreateVtrService();
                const veiculo = await createVtr.execute({ locadoraId, modeloId, OPMID, placa, prefixo, combustivel, quilometragem })
                return res.status(201).send(veiculo)



        }

        /**
         * @vtr expect a string  as a parameter , return  one car or nothing
         * @returns the object Json Vtr or Error
         */
        async find(req:Request,res:Response){
               const {vtr} = req.params;
             

                const findVtr = new FindVtrService();

                const Vtr = await findVtr.execute(vtr)

                if(!Vtr){
                        throw new Error("nao foi encontrado nenhuma Vtr com esse paramentro");
                        
                }

          return   res.status(200).send({Vtr});
                

        }





}