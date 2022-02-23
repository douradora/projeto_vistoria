import React, { useRef, useState } from 'react';
import Main from '../../componetes/Main';
import { Form } from '@unform/web'; 
 import './styles.css';
import Input from '../../componetes/Input';

const Cadastrar: React.FC = () => {
  const formRef = useRef()


    function submitForm(data:string){
        console.log(data)

    }


  return (

        <Main>
            <Form className='formulario' ref ={formRef} onSubmit={submitForm} >
              <Input name='nome' label='nome'/>
              <Input name='sobrenome' label="sobrenome"/>
              <Input className='btn' name= 'Enviar' type='submit' value='send'/>


       
            </Form >

        </Main>


  );
}

export default Cadastrar;