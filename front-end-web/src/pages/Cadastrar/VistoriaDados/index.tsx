import { Scope } from '@unform/core';
import React from 'react';
import RadioInput, { IOptions } from '../../../componetes/radioInput';
import "./styles.css"



//compos que devem constar na vistoria
const Campos = ['Friso lateral', "Espelhos lateral", "Extitor", "Xadrez", "Triangulo", "Macaco", "Chave De Rodas", "Estepe", "Buzina", "Plotagem", "Ar-Condicionado", "Peliculas", "Jogo de Tapetes", "Laterna", "Farol", "Bateria",
  "Para-lamas", "Farol de Milha", "Kit multimidia", "Radio Digital", "Antena do Som", "Antena do Radio"
];

//situaçoes em que se econtra os intem
const situacoes: IOptions[] = [{ id: "bom", },
{ id: "regular" },
{ id: "quebrado" },
{ id: "imprestavel" },
{ id: "amassado" },
{ id: "faltando" },
]

const VistoriaDados: React.FC = () => {
  return (
    <section id='conteiner-dados-vistoria'>
      <div id='cap'>
        <label >Item</label>
        <div id="campos">
          <label htmlFor="">B</label>
          <label htmlFor="">R</label>
          <label htmlFor="">Q</label>
          <label htmlFor="">I</label>
          <label htmlFor="">A</label>
          <label htmlFor="">F</label>

        </div>
      </div>
      <Scope path='vistoriaData'>
      {Campos.map((value) => {
        return <div key={`div-${value}`} className='item'>
          <label key={`label-${value}`} htmlFor="">{value}</label>
          <div  key={`option-${value}`} className='option'>
            <RadioInput key={value}className='situacao' name={value} options={situacoes} />
          </div>


        </div>


      })}
      </Scope>
    </section>

  );
}

export default VistoriaDados;