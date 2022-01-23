
import {Router } from "express";
import { CreateUserController } from "../Controllers/CreateUserController";
import { LoginController } from "../Controllers/LoginController";
import { authToken } from "../middeleware/authToken";


const routes =Router();

routes.post('/createUser',new CreateUserController().handle);
routes.get('/login',new LoginController().handle);

routes.get('/home',authToken ,(req,res)=>{
res.send( {"message":"token valido"})
})
export {routes}

