import React from 'react';

import RadioInput from '../../../componetes/radioInput';
import {situacao} from  '../tabelaDados'

import './styles.css';

const Infors: React.FC = () => {
  return (
    <section className='infors'>
        <RadioInput name='situacao' options={situacao}/>

    </section>



  );
}

export default Infors;