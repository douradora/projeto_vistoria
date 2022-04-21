import { Scope } from '@unform/core';
import React from 'react';
import Input from '../../../componetes/Input';
<<<<<<< HEAD
import './styles.css';
=======
import "./styles.css"

>>>>>>> 801500db328806bd68e6e23d973dcf82e0585b34


const Condutor: React.FC = () => {
  return (
<<<<<<< HEAD
        <div className='conteiner-condutor'>
          <Scope path='Condutor'>
=======
        <div className='condutor-form'>
        <Scope path='Condutor'>
>>>>>>> 801500db328806bd68e6e23d973dcf82e0585b34
         <Input name='Nome_condutor' label='Nome Completo:'/>
         <Input name='cpf_condutor' label='Cpf:'/>
        </Scope>
        </div>



  );
}

export default Condutor;