import { Client } from "../../Prisma/prismaClient";


export class listModeloVeiculo {
    /**
     * 
     * @param montadora name of an automaker, 
     * @returns all  car models , if the param 'montadora is set', only cars form this automaker will be returned
     */

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