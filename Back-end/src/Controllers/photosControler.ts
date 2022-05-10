import {v4 as uuid} from 'uuid';
import CreatePhotoService from "../services/PhotosService/CreatePhotosService";
import fs from 'fs';
import path from 'path';






export class photoController{


async create(arquivo,VtrName){

    const id =uuid(); //gera uma ID para a foto
    const  savePhotoBd = new CreatePhotoService();
    var urls =[];

    arquivo.map((value)=>{
        const {buffer,originalname} = value;
        const extensao  = originalname.split('.')[1]
        const nomeDoArquivo = `${VtrName}@${Date.now()}.${extensao}`;
        //salvar arquivo
        fs.writeFileSync(path.join(__dirname,'..','..','..','uploads',nomeDoArquivo),buffer);
        urls.push(nomeDoArquivo);


    })

     
    const photos =await savePhotoBd.execute({id,url:urls});

    return photos.id_photos;
    }




}

