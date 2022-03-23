import { Scope } from '@unform/core';
import React from 'react';
import Input from '../../../componetes/Input';



const Condutor: React.FC = () => {
  return (
        <div className='condutor-form'>
          <Scope path='Condutor'>
         <Input name='Nome_condutor' label='Nome Completo:'/>
         <Input name='cpf_condutor' label='Cpf:'/>
         </Scope>
        </div>



  );
}

export default Condutor;