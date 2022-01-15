import { compare, hash } from "bcryptjs";
import { Response, Request, NextFunction, json } from "express";
import { stringify } from "uuid";
import { userLoad } from "../services/userLoad";




export class authcontroller {


    async handle(req: Request, res: Response) {
        const load = new userLoad();
        const { login, password } = req.body;

        const usuario = await load.execute(login);

        if (!usuario) {
            res.json({ "message": "usuario nao existe" });
        } else {

            if (await compare(password, `${usuario.Senha}`)) {
                res.json(usuario);
            } else {
                res.send("senha incorreta");
            }

        }

    }
}





