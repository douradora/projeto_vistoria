import { Scope } from '@unform/core';
import React from 'react';
import Input from '../../../componetes/Input';
import TextArea from '../../../componetes/TextArea';

import './styles.css';

const Obs: React.FC = () => {
  return (
    <section id='conteiner-obs'>
      <Scope path='obs'> 
       <TextArea rows='10' className='obs' name='observacao' type="textarea" />
       </Scope>

    </section>
  );
}

export default Obs;