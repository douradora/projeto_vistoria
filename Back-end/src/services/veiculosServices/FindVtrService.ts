import { Client } from "../../Prisma/prismaClient";


export class FindVtrService{
        async execute(dado){
           
         if(dado===undefined){
             const Find  = await Client.$queryRaw`SELECT veiculo.placa ,
             veiculo.prefixo,
             modeloveiculo.modelo,
             opm.nome_opm as opm,
             locadora.nome_locadora as locadora FROM veiculo
             INNER JOIN modeloveiculo ON  veiculo.modelo_id = modeloVeiculo.id_modelo 
             INNER JOIN opm ON veiculo.opm_id = opm.id_opm 
             INNER JOIN locadora ON veiculo.locadora_id = locadora.id_locadora`
        
             return Find;
          }else{
            
            
        const Find  = await Client.$queryRaw`SELECT veiculo.placa ,
        veiculo.prefixo,
        modeloveiculo.modelo,
        opm.nome_opm as opm,
        locadora.nome_locadora as locadora FROM veiculo
        INNER JOIN modeloveiculo ON  veiculo.modelo_id = modeloVeiculo.id_modelo 
        INNER JOIN opm ON veiculo.opm_id = opm.id_opm 
        INNER JOIN locadora ON veiculo.locadora_id = locadora.id_locadora 
        and veiculo.placa = ${dado} `

        
        return Find;

        }

}




}