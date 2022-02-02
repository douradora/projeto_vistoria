import { Client } from "../../Prisma/prismaClient";

interface Imodelo {
    montadora: string;
    modelo: string;


}

export class createModeloVeiculoService {

    async execute({ montadora, modelo }: Imodelo) {

        const findModelo = await Client.modeloVeiculo.findFirst({ where: { modelo } });

        if (findModelo) {
            throw new Error("Modelo ja foi cadastrado")
        }

        const createModelo = await Client.modeloVeiculo.create({
            data: {
                modelo,
                montadora


            }

        })

        return createModelo;

    }





}