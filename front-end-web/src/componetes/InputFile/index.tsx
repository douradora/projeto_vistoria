import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

interface Props{
    name:string
    label?:string
    imageLabel?:string



}

type InputProps = JSX.IntrinsicElements['input'] & Props;


// import { Container } from './styles';

const InputFile:React.FC<InputProps> = ({name,label,imageLabel,...rest}:InputProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
        
    const {fieldName,defaultValue,registerField,error}=useField(name);


    useEffect(()=>{

        registerField({
            name:fieldName,
            ref:inputRef,
            getValue: ref=>{
              return ref.current.files;
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
        <div>
        {label && <label htmlFor={fieldName}>
        {label} 
        {imageLabel?<img src={imageLabel} alt={imageLabel}/> :''} 
        
        
        </label>}
        

        <input id={fieldName}
        type="file"
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest} />
        
        </div>
        
  );
}

export default InputFile;