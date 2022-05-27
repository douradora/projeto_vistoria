import { useField } from '@unform/core';
import React, { Props, useEffect, useRef } from 'react';


interface props{
    id:string|number
    name:string
   
}
// import { Container } from './styles';

const Options: React.FC<props> = ({id,name,...rest}:props) => {


    const optionRef = useRef<HTMLInputElement>(null);
        
    const {fieldName,defaultValue,registerField,error}=useField( `${id}`);


    useEffect(()=>{
        
        //@ts-ignore
        registerField({
            name:fieldName,
            ref:optionRef,
            path:'value',

            getValue: ref=>{
              return  ref.current.value
            },
            setValue:(ref,value)=>{
                ref.current.value = value
            },
            clearValue:ref=>{
                ref.current.value=' '
            },


        })
        

    },[fieldName,registerField])
        
    



  return  <option 
ref={optionRef}
id={fieldName}
 
  key={name} 

  value={id}
  {...rest} >
            
      {name}</option>;
}

export default Options;