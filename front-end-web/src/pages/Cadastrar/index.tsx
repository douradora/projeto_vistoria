import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import './styles.css';
import Input from '../../componetes/Input';
import { Navigate, Outlet } from 'react-router-dom';
import { navButton } from '../../tabelaDados';
import NavBottom from './pages/NavBottom';
import { FormHandles } from '@unform/core';


const Cadastrar: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const inputRef = useRef<HTMLInputElement>();


  const [dadosForm, setDadosForm] = useState<{}>('');

  useEffect(() => {
    console.log(dadosForm)
    
  
  }, [dadosForm])




function submitFunc(){
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
          setDadosForm({ ...dadosForm, "cabeca": data.Cabecalho })
          break;
        case "Situacao":
          setDadosForm({ ...dadosForm, "situcao": data.Situacao })
          break;
        case "Obs":
          setDadosForm({ ...dadosForm, "obs": data.Obs })
          break;
        case "photos":
          setDadosForm({ ...dadosForm, "photos": data.photos })
          break;
        case "VistoriaData":
          setDadosForm({ ...dadosForm, "vistoriaData": data.VistoriaData })
          break;
        case "Condutor":
          setDadosForm({ ...dadosForm, "condutor": data.Condutor })
          break;
        default:
          setDadosForm({ ...dadosForm });
      }


    })



  }


  return (
    <div className='cadastro-conteudo'>

      <Form className='formulario'  onBlur={submitFunc}  encType='multipart/form-data' id='Forms' ref={formRef} onSubmit={submitForm} >
        <Outlet />
        
      </Form >
      <button  className='btn'  ref={inputRef}  onClick={submitFunc} name="enviar" >Salvar</button>
      <NavBottom buttonList={navButton}   />

    </div>
  );
}

export default Cadastrar;