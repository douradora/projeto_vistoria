
import {Router } from "express";

import { authcontroller } from "../Controllers/authController";
import { CreateUserController } from "../Controllers/CreateUserController";


const routes =Router();

routes.post('/createUser',new CreateUserController().handle);

export {routes}

