import { Request, Response } from "express";
import { createUserService } from "../services/userServices/createUserSevice";


export class createUserController {

    async handle(req: Request, res: Response) {
        const { cpf_user, email, password, name, is_adm } = req.body;

        if (!cpf_user || !email || !name || !password) {
            throw new Error('Todos os campos devem ser preechidos');
        }

        const create = new createUserService();

        const result = await create.execute({ cpf_user, name, email, password, is_adm });

        if (result instanceof Error) {
            throw new Error("usuario nao salvo algo de errado aconteceu");
        }

        return res.status(200).send({ "message": "usuario cadastrado" });


    }
}