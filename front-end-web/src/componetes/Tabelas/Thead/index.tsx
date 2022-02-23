import React from 'react';

type Threadprops ={
    dados:string[]


}


const Thead: React.FC<Threadprops> = ({dados,...rest}:Threadprops) => {
  return (
    <thead>
      {dados.map((value)=>{
          return <th>{value}</th>



    })}
</thead>

    ) 

}

export default Thead;