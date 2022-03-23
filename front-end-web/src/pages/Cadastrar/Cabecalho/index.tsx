import React from 'react';
import Input from '../../../componetes/Input';
import { Scope } from '@unform/core';
import './styles.css';

const Cabecalho: React.FC = () => {




  return (
  
  <section id='conteiner-cabecalho'>
     <Scope path='Cabecalho' >
      <Input className='field-cap' name='opm' label='Opm' />
      <Input className='field-cap' name='locadora' label="locadora" />
      <Input className='field-cap' name='data' type="date" label="data" />
      <Input className='field-cap' name='montadora' label="Marca" />
      <Input className='field-cap' name='modelo' label="Modelo" />
      <Input className='field-cap' name='placa' label="Placa" />
      <Input className='field-cap' name='cobustivel' label="Combustivel" type='range' />
      <Input className='field-cap' name='quilometragem' type="number" min="0" label="KM" />

    </Scope>
  </section>
   




  );
}

export default Cabecalho;