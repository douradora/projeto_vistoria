import React, { cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import './styles.css';

import { Outlet } from 'react-router-dom';
import { navButton } from '../../tabelaDados';
import NavBottom from './pages/NavBottom';
import { FormHandles } from '@unform/core';



const Cadastrar: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const inputRef = useRef<HTMLInputElement>();
  const [dadosForm, setDadosForm] = useState<{}>('');



  useEffect(()=>{
    console.log(dadosForm)
  },[dadosForm])

  function submitFunc() {
    formRef.current?.submitForm()
  }


  







  /**
   * @submitForm recebe os dados do formulario e incluir no estado de dadosForm
   */


  function submitForm(data: any) {

    let dados = Object.keys(data);
    dados.map(campo => {
      switch (campo) {

        case "Cabecalho":
          setDadosForm({ ...dadosForm, "Cabecalho": data.Cabecalho })
          break;
        case "situacao":
          setDadosForm({ ...dadosForm, "situacao": data.situacao })
          break;
        case "Obs":
          setDadosForm({ ...dadosForm, "Obs": data.Obs })
          break;
        case "photos":
          var photos =data.photos;
          setDadosForm({ ...dadosForm,photos})
          break;
        case "VistoriaData":
          setDadosForm({ ...dadosForm, "VistoriaData": data.VistoriaData })
          break;
        case "Condutor":
          setDadosForm({ ...dadosForm, "Condutor": data.Condutor })
          break;
        default:
          setDadosForm({ ...dadosForm });
      }


    })



  }


  return (
    <div className='cadastro-conteudo'>

      <Form className='formulario' initialData={dadosForm} onBlur={submitFunc} encType='multipart/form-data' id='Forms' ref={formRef} onSubmit={submitForm} >

        <Outlet context={[dadosForm,setDadosForm]}   />
       
      </Form >
     
      <NavBottom  key="barra-navegacao" buttonList={navButton} />

    </div>
  );
}

export default Cadastrar;