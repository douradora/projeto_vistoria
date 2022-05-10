import React from 'react';

type Threadprops ={
    dados:string[]


}


const Thead: React.FC<Threadprops> = ({dados,...rest}:Threadprops) => {
  return (
    <thead {...rest}>
      {dados.map((value,index)=>{
          return <th key={index}>{value}</th>



    })}
</thead>

    ) 

}

export default Thead;