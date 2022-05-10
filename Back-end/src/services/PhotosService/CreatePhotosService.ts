import { Client } from "../../Prisma/prismaClient"

interface IPhotos {
  id: string,
  url: string[]

}

export default class CreatePhotoService {

  /**
   * @param id  usar o mesmo id da vistoria a qual esta atribuido
   * @param url deve ser um array de string contendo os caminhos das fotos salvas
   * @returns retorna os dados da vistoria caso salvo corretamente no banco
   */
  async execute({ id, url }: IPhotos) {


    const url_photos = url.toString();

    const CreatePhotos = await Client.photos.create({
      data: {
        id_photos: id,
        url_photos,
      }
    })
    return CreatePhotos;
  }




}