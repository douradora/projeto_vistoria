import { Client } from "../../Prisma/prismaClient";


export default class listUrlPhotosService{

            async  execute(id:string){

                const FindPhotos = await Client.photos.findFirst({where:{idPhotos:id}});

                if(!FindPhotos){
                    throw new Error("nenhuma arquivo de photo encontrado para esta vistoria");

                }

                const urlPhotos = FindPhotos.urlPhotos.split(',');
                return urlPhotos;
            }

}