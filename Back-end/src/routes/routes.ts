
import {Router } from "express";

import { authcontroller } from "../Controllers/authController";
import { CreateUserController } from "../Controllers/CreateUserController";
import { LoginController } from "../Controllers/LoginController";


const routes =Router();

routes.post('/createUser',new CreateUserController().handle);
routes.get ('/login',new LoginController().handle);

export {routes}

