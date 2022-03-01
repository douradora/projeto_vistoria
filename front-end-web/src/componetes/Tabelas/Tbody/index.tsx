import React from 'react';



interface tbodyProps {
    dados:string[]
    key?:number



}

/**
 * 
 * @param dados dados que vao povoar a tabela
 * @returns 
 */
const Tbody: React.FC<tbodyProps> = ({dados,key,...rest}:tbodyProps) => {


  
 console.log()

    return (
    <tbody {...rest} >
        {
            dados.map((value)=>{
                return <td key={key}>{value}</td>
            })
            
        }
        
      
        
    </tbody>
    
    );

}

export default Tbody;