import { Request, Response } from "express";
import { createFuncaoService } from "../services/FuncaoServices/createFuncaoServices";
import { listFuncaoService } from "../services/FuncaoServices/listFuncaoService";


export class funcaoController {
  // deve receber apenas o nome da funçao via Request
  async create(req: Request, res: Response) {
    const { nome_funcao } = req.body;
    if (!nome_funcao) {
      throw new Error('dados nao enviado corretamente');
    }

    const createFuncao = new createFuncaoService();
    const create = await createFuncao.execute(nome_funcao);
    res.status(200).send({ create });


  }

  //lista todas as funçoes criadas, nao recebe nenhum parametro via request
  async list(req: Request, res: Response) {
    const listFuncao = await new listFuncaoService().execute();

    if (listFuncao) {
      res.status(200).send({ listFuncao });

    } else {
      res.status(400);
    }

  }





}