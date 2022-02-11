import { Request, Response } from "express";
import { createLocadoraservice } from "../services/locadorasServces/createLocadora"
import { locadoraList,Ilocadora } from "../services/locadorasServces/LocadoraList";

/**
 *  lista todas as locadoras 
 *
 * @export
 * @class listLocadorasController
 */
export class locadorasController {

    async create(req: Request, res: Response){
         const {nomelocadora} =req.body;
        
         if(!nomelocadora){
             throw new Error("sem dados para salvar");
         }
         const locadora = new createLocadoraservice();
         
        const createLocadora =await locadora.execute(nomelocadora);


        return res.status(200).send(createLocadora);

        







    }
    async list(req: Request, res: Response) {
        
        const Locadoralista = new locadoraList();
        const lista = await Locadoralista.execute();
        res.status(201).send(lista)




    }






}