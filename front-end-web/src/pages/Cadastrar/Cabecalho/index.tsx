import React from 'react';
import Input from '../../../componetes/Input';

import './styles.css';

const Cabecalho: React.FC = () => {
  return ( 
      
  <section className='cabeca'>
  <Input name='opm' label='Opm' />
  <Input name='locadora' label="locadora" />
  <Input name='data' type="date" label="data" />
  <Input name='montadora'  label="Marca" />
  <Input name='modelo'  label="Modelo" />
  <Input name='placa'  label="Placa" />
  <Input name='prefixo'  label="Prefixo" />
  <Input name='cobustivel'  label="Combustivel"  type='range'/>
  <Input name='quilometragem'  label="KM"  />
</section>




);
}

export default Cabecalho;