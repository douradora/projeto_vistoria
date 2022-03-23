import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface Props{
    name:string
    label?:string



}

type InputProps = JSX.IntrinsicElements['textarea'] & Props;


 const TextArea: React.FC<InputProps> = ({name,label,...rest}:InputProps) => {

    const inputRef = useRef<HTMLTextAreaElement>(null);
        
    const {fieldName,defaultValue,registerField,error}=useField(name);


    useEffect(()=>{

        registerField({
            name:fieldName,
            ref:inputRef,
            getValue: ref=>{
              return  ref.current.value
            },
            setValue:(ref,value)=>{
                ref.current.value = value
            },
            clearValue:ref=>{
                ref.current.value=''
            },

        })

    },[fieldName,registerField])
  
  
    return (
        <>
        {label && <label htmlFor={fieldName}>{label} </label>}
        <textarea id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest} />
        
        </>
        
  );
}

export default TextArea;