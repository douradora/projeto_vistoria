
import {Router } from "express";
import { CreateUserController } from "../Controllers/CreateUserController";
import { VtrController } from "../Controllers/VtrController";
import { listLocadorasController } from "../Controllers/LocadorasController";
import { LoginController } from "../Controllers/LoginController";
import { authToken } from "../middeleware/authToken";




const routes =Router();

routes.post('/createUser',new CreateUserController().handle);
routes.get('/login',new LoginController().handle);
routes.get('/listarLocadora',new listLocadorasController().list);
routes.get('/listaVtr/:vtr?',new VtrController().Find)
routes.get('/home',authToken ,(req,res)=>{
res.send( {"message":"token invalido"})
});
routes.post('/createCar',new VtrController().create);



export {routes}

