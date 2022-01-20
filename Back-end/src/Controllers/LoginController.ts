import { compare, hash } from "bcryptjs";
import { Response, Request, NextFunction, json } from "express";
import { stringify } from "uuid";
import { userLoad } from "../services/userLoad";




export class LoginController {


    async handle(req: Request, res: Response) {


    }
}
