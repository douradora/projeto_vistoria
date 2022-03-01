import { useEffect, useState } from 'react';
import Main from '../../componetes/Main';
import api from '../../api/api';
import Table from '../../componetes/Tabelas/table';
import Thead from '../../componetes/Tabelas/Thead';
import Tbody from '../../componetes/Tabelas/Tbody';
import './styles.css';




function Vistoria() {
   
    const [vistorias, setVistorias] = useState([]);
    const [errorConnection, seterrorConnection] = useState(false);
   
   
    //cabeçalho da tabela
    const cabeca = ['placa-veiculo', 'vistoriador', 'situcao', 'data']

    // requisiçao de vistorias ao servidor  
    useEffect(() => {
        api.get('/listVistorias').then((response) => {
            setVistorias(response.data)
        }).catch((reason) => {
            seterrorConnection(true);

        });
    }, []);



    if (errorConnection) {
    return(
            <div className='errorAdvise'>Nao foi possivel conectar</div>
        )
    } else {
        return (


            <div className='tabela'>
                <Table nome='vistorias'>
                    <Thead dados={cabeca} />
                    {vistorias.map((value, index) => {
                        const { veiculoPlaca, id_user, situacao, created_at } = value;
                        return <Tbody key={index} dados={[veiculoPlaca, id_user, situacao, created_at]}></Tbody>

                    })}

                </Table>
            </div>


        )
    }

}

export default Vistoria;