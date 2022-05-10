import { Scope } from '@unform/core';
import React from 'react';

import RadioInput from '../../../../componetes/radioInput';
import {situacao} from  '../../../../tabelaDados'

import './styles.css';

const Infors: React.FC = () => {
  return (
    <section key="infors-sections" id='conteiner-info' className='infors'>
        <Scope path='Situacao'>
        <RadioInput   name='situacao' options={situacao}/>
        </Scope>
    </section>



  );
}

export default Infors;