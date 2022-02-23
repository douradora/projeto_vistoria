import React from 'react';



interface tbodyProps {
    dados:string[]



}


const Tbody: React.FC<tbodyProps> = ({dados,...rest}:tbodyProps) => {


  
 console.log()

    return (
    <tbody {...rest} >
        {
            dados.map((value)=>{
                return <td>{value}</td>
            })
            
        }
        
      
        
    </tbody>
    
    );

}

export default Tbody;