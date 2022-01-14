import { setRandomFallback } from "bcryptjs";
import { json, Router } from "express";
import { getRepository } from "typeorm";
import { authcontroller } from "./Controllers/authController";
import { login } from "./entites/user";


const routes =Router();

routes.post('/',authcontroller.handle(req,res));

export {routes}
