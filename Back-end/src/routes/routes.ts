
import {Router } from "express";
import { createUserController } from "../Controllers/createUserController";
import { vtrController } from "../Controllers/vtrController";
import { locadorasController } from "../Controllers/locadorasController";
import { loginController } from "../Controllers/loginController";
import { authToken } from "../middeleware/authToken";
import { funcaoController } from "../Controllers/funcaoController";
import { opmController } from "../Controllers/opmController";





const routes =Router();
//post
routes.post('/createUser',new createUserController().handle);
routes.post('/createFuncao',new funcaoController().create);
routes.post('/createCar',new vtrController().create);
routes.post('/createLocadora',new locadorasController().create)
routes.post('/createOpm',new opmController().create);
//get
routes.get('/login',new loginController().handle);
routes.get('/listarLocadora',new locadorasController().list);
routes.get('/listaVtr/:vtr?',new vtrController().find)
routes.get('/listFuncao',new funcaoController().list);
routes.get('/listOpm',new opmController().list);




routes.get('/home',authToken ,(req,res)=>{
res.send( {"message":"token invalido"})
});




export {routes}

