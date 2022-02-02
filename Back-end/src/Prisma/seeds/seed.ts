import { Client } from "../prismaClient";


async function main() {
    
    const veiculos = await Client.veiculo.upsert({
        create:{
            Placa:"qwe-0brt",
            Prefixo:"12-111",
            combustivel:




        }




    })
}