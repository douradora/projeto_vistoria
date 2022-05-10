import { Request,Response } from "express";
import { createOpmServices } from "../services/OpmSevices/createOpmServices";
import {listOpmService} from "../services/OpmSevices/listOpmService"

export class opmController{
           
          async create(req:Request,res:Response){
                const {nome_opm,comando} = req.body;

                if(!nome_opm||!comando){
                    throw new Error("sem dados suficientes");
            }
        
                const opmCreate = new createOpmServices();
                 const opm = await opmCreate.execute({nome_opm,comando});


                 res.status(200).send(opm)
        


            }



           async list(req:Request,res:Response){
                const opms =  new listOpmService();
                const list =await opms.execute();
                


                return res.status(200).send(list);



            }





}