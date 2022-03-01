import React, { useRef} from 'react';
import { Form } from '@unform/web';
import './styles.css';
import Input from '../../componetes/Input';
import {Outlet } from 'react-router-dom';
import { navButton } from './tabelaDados';
import NavBottom from './NavBottom';

const Cadastrar: React.FC = () => {

  const formRef = useRef()


  function submitForm(data: string) {
    console.log(data)
  }


  return (
    <div className='cadastro-conteudo'>
            
          <Form className='formulario' ref={formRef} onSubmit={submitForm} >
            <Outlet/>
          <Input className='btn' name='Enviar' type='submit' value='send' />
          </Form >
          <NavBottom buttonList={navButton} />

          </div>
  );
}

export default Cadastrar;