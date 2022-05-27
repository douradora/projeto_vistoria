import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';


interface Props{
    name:string
    label?:string



}

type InputProps = JSX.IntrinsicElements['input'] & Props;


 const Input: React.FC<InputProps> = ({name,label,...rest}:InputProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
        
    const {fieldName,defaultValue,registerField,error}=useField(name);


    useEffect(()=>{

        registerField({
            name:fieldName,
            ref:inputRef.current,
            path:'value'
            
        })

    },[fieldName,registerField])
  
  
    return (
        <>
        {label && <label htmlFor={fieldName}>{label} </label>}
        <input id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest} />
        
        </>
        
  );
}

export default Input;