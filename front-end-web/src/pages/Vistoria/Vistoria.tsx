
import Main from '../../componetes/Main';
import api from '../../api/api';

import './styles.css';

import Table from '../../componetes/Tabelas/table';
import Thead from '../../componetes/Tabelas/Thead';
import Tbody from '../../componetes/Tabelas/Tbody';
import { useEffect, useState } from 'react';

function Vistoria() {
    const [vistorias,setVistorias]= useState([]);

    const cabeca = ['placa-veiculo', 'vistoriador', 'situcao', 'data']

    useEffect(()=>{
        api.get('/listVistorias').then((response)=>{
            setVistorias(response.data)
        });
    },[]);
          
    
    

    return (

        <Main >
            <div className='tabela'>
                <Table nome='vistorias'>
                    <Thead dados={cabeca} />
                    {vistorias.map((value)=>{
                        const { veiculoPlaca,id_user,situacao,created_at} =value;
                        return <Tbody dados={[veiculoPlaca,id_user,situacao,created_at]}></Tbody>
                        



                    })}

                </Table>
            </div>
        </Main>

    )

}

export default Vistoria;