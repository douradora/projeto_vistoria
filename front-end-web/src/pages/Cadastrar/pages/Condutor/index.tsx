import { Scope } from '@unform/core';
import React from 'react';
import Input from '../../../../componetes/Input';
import './styles.css';


const Condutor: React.FC = () => {
  return (
        <div className='conteiner-condutor'>
          <Scope path='Condutor'>
         <Input name='Nome_condutor' label='Nome Completo:'/>
         <Input name='cpf_condutor' label='Cpf:'/>
         <Input name='email_condutor' type='email'   label='Email:'/>
        </Scope>
        </div>



  );
}

export default Condutor;