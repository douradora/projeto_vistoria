import React from 'react';

import './styles.css';

interface TableProps{
    nome:string

}

const Table: React.FC<TableProps> = (props,{nome,...rest}:TableProps) => {





  return(
  <table id={nome}  {...rest}>
      
        {props.children}
     
     
 
     
  </table>
  
  )

}

export default Table;