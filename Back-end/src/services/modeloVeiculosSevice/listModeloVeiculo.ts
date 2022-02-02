import { Client } from "../../Prisma/prismaClient";


export class listModeloVeiculo {
    async execute(montadora?) {

        if (montadora) {
            const findModelo = await Client.modeloVeiculo.findMany({ where: { montadora } });
            return findModelo;
        } else {
            const findModelo = await Client.modeloVeiculo.findMany({ where: { montadora } });
            return findModelo;
        }


    }
}