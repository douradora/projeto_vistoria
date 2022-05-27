import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';





const Envio: React.FC = () => {
    const [dadosForm, setDadosForm] = useOutletContext();


  return ( dadosForm&&<div>
        <p>{dadosForm.Condutor.Nome_condutor}</p>

       </div> );
}

export default Envio;