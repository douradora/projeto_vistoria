import { useField } from '@unform/core';
import React, { useEffect, useRef,forwardRef } from 'react';

interface Props{
    name:string
    label?:string
    imageLabel?:string



}

type InputProps = JSX.IntrinsicElements['input'] & Props;


// import { Container } from './styles';

const InputFile:React.RefForwardingComponent<HTMLInputElement,InputProps> = ({name,label,imageLabel,...rest}:InputProps,ref) => {

   
    return (
        <div>
        {label && <label htmlFor={name}>
        {label} 
        {imageLabel?<img src={imageLabel} alt={imageLabel}/> :''} 
        
        
        </label>}
        

        <input id={name}
        name={name}
        type="file"
        ref={ref}
        
        {...rest} />
        
        </div>
        
  );
}

export default forwardRef (InputFile);