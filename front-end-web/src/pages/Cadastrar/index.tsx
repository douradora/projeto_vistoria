import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import './styles.css';
import Input from '../../componetes/Input';
import { Navigate, Outlet } from 'react-router-dom';
import { navButton } from './tabelaDados';
import NavBottom from './NavBottom';

const Cadastrar: React.FC = () => {

  const formRef = useRef()
  const [dadosForm, setDadosForm] = useState<{}>('');

  useEffect(()=>{
    console.log(dadosForm)
  },[dadosForm])



  function action() {


  }

  //seta dados  
  function submitForm(data) {
    let dados = Object.keys(data);
    switch (dados[1]) {
      case "Cabecalho":
        setDadosForm({ ...dadosForm, "cabeca": data.Cabecalho })
        break;
      case "situacao":
        setDadosForm({ ...dadosForm, "situcao": data.situacao })
        break;
      case "obs":
        setDadosForm({ ...dadosForm, "obs": data.obs })
        break
      case "photos":
        setDadosForm({ ...dadosForm, "photos": data.photos })

        break
      case "vistoriaData":
        setDadosForm({ ...dadosForm, "vistoriaData": data.vistoriaData })

        break
      case "Condutor":
        setDadosForm({ ...dadosForm, "condutor": data.Condutor })
        break
      default:
        setDadosForm({ ...dadosForm });
    }
 

  }


  return (
    <div className='cadastro-conteudo'>

      <Form className='formulario' encType='multipart/form-data' id='Forms' ref={formRef} onSubmit={submitForm} >
        
        <Outlet context={dadosForm}/>
        <Input name='Salvar' className='btn' type='submit' value='Salvar' />
      </Form >

      <NavBottom onClick={action} buttonList={navButton} />

    </div>
  );
}

export default Cadastrar;