import { setRandomFallback } from "bcryptjs";
import { json, Router } from "express";
import { getRepository } from "typeorm";
import { authcontroller } from "./Controllers/authController";
import { login } from "./entites/user";


const routes =Router();

routes.post('/',new authcontroller().handle);

export {routes}

