import React, { useEffect, useState } from 'react';
import { AtCircle, Contract, Key } from 'react-ionicons';
import { useOutletContext } from 'react-router-dom';
import Condutor from '../Condutor';





const Envio: React.FC = () => {
  const [dadosForm]= useOutletContext();

  function submitevent(){
    console.log(dadosForm)
  }

  return (  <button className='btn' onClick={submitevent}  name="enviar" >Salvar</button>)
    
   
}

export default Envio;