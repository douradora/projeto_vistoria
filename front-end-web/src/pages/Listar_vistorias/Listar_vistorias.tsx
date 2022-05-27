import { useEffect, useState } from 'react';
import api from '../../api/api';
import Table from '../../componetes/Tabelas/table';
import Thead from '../../componetes/Tabelas/Thead';
import Tbody from '../../componetes/Tabelas/Tbody';
import './styles.css';




function Vistoria() {
   
    const [vistorias, setVistorias] = useState([]);
    const [errorConnection, seterrorConnection] = useState(false);
   
   
    //cabeçalho da tabela
    const cabeca = ['Placa-Veiculo', 'Vistoriador', 'Situcao', 'Data','Hora']

    // requisiçao de vistorias ao servidor  
    useEffect(() => {
        api.get('/listVistorias').then((response) => {
            setVistorias(response.data.listando)
        }).catch((reason) => {
            seterrorConnection(true);

        });
    }, []);



  

            
        
    
        return (
            errorConnection? 
            
            <div className='errorAdvice'>Nao foi possivel conectar</div> :

            <div className='tabela'>
                <Table nome='vistorias'>
                    <Thead dados={cabeca} />
                    {vistorias.map((value, index) => {
                        const { veiculoPlaca, id_user, situacao, created_at } = value;
                        
                        const splitData = created_at.split('T');
                        const data = splitData[0].split("-");
                        const hora = splitData[1].split('+')[0]
                       
                        return <Tbody key={created_at} dados={[veiculoPlaca, id_user, situacao, `${data[2]}/${data[1]}/${data[0]}`,hora]}></Tbody>

                    })}

                </Table>
            </div>


        )
    

}

export default Vistoria;