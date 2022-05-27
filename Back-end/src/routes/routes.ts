
import {Router } from "express";
import { createUserController } from "../Controllers/createUserController";
import { vtrController } from "../Controllers/vtrController";
import { locadorasController } from "../Controllers/locadorasController";
import { loginController } from "../Controllers/loginController";

import { funcaoController } from "../Controllers/funcaoController";
import { opmController } from "../Controllers/opmController";
import { vistoriaController } from "../Controllers/vistoriaController";
import { uploadFilesInMemory } from "../Config/uploadPhotos";



const routes =Router();
//post
routes.post('/createUser',new createUserController().handle);
routes.post('/createCar',new vtrController().create);
routes.post('/createVistoria',uploadFilesInMemory.array('photos',6),new vistoriaController().create);

/** funçoes post desativadas pois os itens sao de uma lista limitada , podendo ser inicialida diretamente 
 * uma seed no banco de dados ou se futuramente surgir mais dados , incluida diretamento no banco;
*/
//routes.post('/createFuncao',new funcaoController().create);
//routes.post('/createLocadora',new locadorasController().create)
//routes.post('/createOpm',new opmController().create);

//get
routes.post('/login',new loginController().handle);

routes.get('/listarLocadora',new locadorasController().list);
routes.get('/listaVtr/:vtr?',new vtrController().find)
routes.get('/listFuncao',new funcaoController().list);
routes.get('/listOpm',new opmController().list);
routes.get('/listVistorias',new vistoriaController().listvistoria);




routes.get('/home',(req,res)=>{
res.send( {"message":"token valido"})
});




export {routes}

