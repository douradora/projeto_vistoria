import React, { useEffect, useState } from 'react';
import Input from '../../../../componetes/Input';
import { Scope } from '@unform/core';
import './styles.css';
import Select from '../../../../componetes/Select';
import api from '../../../../api/api';





const Cabecalho: React.FC = () => {



  const [opm, setOpm] = useState<[]>([])
  const [locadora, setLocadora] = useState<[]>([])

  //@ts-ignore
  useEffect(async () => {
    const { data } = await api.get('/listOpm');
    const dadosLocadora = await api.get('/listarLocadora');

    var opms = [];
    var locadoras = [];

    data.map((value) => {

      const { id_opm, nome_opm } = value;
      opms.push({ id: id_opm, name: nome_opm })
    });


    dadosLocadora.data.map((value) => {
      const { id_locadora, nome_locadora } = value;
      locadoras.push({ id: id_locadora, name: nome_locadora });
    })
    setOpm(opms);
    setLocadora(locadoras);

  }, []);


  return (

    <section id='conteiner-cabecalho'>
      <Scope path='Cabecalho'  >
        <Select key='Opm'   className='field-cap' name='OPM' label='Opm' options={opm} />


        <Select key='locadora' className='field-cap' name="locadora" label='locadora' options={locadora} />

        <Input key='data' className='field-cap' name='data' type="date" label="data" />
        <Input key={'marca'} className='field-cap' name='montadora' label="Marca" />
        <Input key={"modelo"} className='field-cap' name='modelo' label="Modelo" />
        <Input key={"placa"} className='field-cap' name='placa' label="Placa" />
        <Input key={"combustivel"} className='field-cap' name='cobustivel' label="Combustivel" type='range' />
        <Input key={"quilometragem"} className='field-cap' name='quilometragem' type="number" min="0" label="KM" />

      </Scope>
    </section>





  );
}

export default Cabecalho;