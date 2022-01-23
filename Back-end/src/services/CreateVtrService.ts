import internal from "stream";
import { Client } from "../Prisma/prismaClient";

interface Ivtr{
    Placa: string
    prefixo: string
    quilometragem: number
    combustivel: number
    ModeloId: number
    opmid: number
    locadoraid: number








}

export class CreateVtrService{
        async execute(vtr:Ivtr){

            const createVtr = await Client.     





        }




}