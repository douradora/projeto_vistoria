import { Request, Response } from "express";
import { Ilocadora, LocadoraList } from "../services/locadorasServces/LocadoraList";

/**
 *  lista todas as locadoras 
 *
 * @export
 * @class listLocadorasController
 */
export class listLocadorasController {

    async create(req: Request, res: Response){
         const {nomelocadora} =req.body;

        







    }
    async list(req: Request, res: Response) {
        
        const Locadoralista = new LocadoraList();
        const lista = await Locadoralista.execute();
        res.status(201).send(lista)




    }






}