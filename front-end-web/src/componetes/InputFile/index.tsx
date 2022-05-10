import { useField } from '@unform/core';
import React, { useEffect, useRef,forwardRef } from 'react';
import { IconType } from 'react-icons';


interface Props{
    name:string
    label?:string
    iconName?:IconType



}

type InputProps = JSX.IntrinsicElements['input'] & Props;


// import { Container } from './styles';

const InputFile:React.RefForwardingComponent<HTMLInputElement,InputProps> = ({name,label,iconName,className,...rest}:InputProps,ref) => {

   
    return (
        <div className={className}>
        {label && <label htmlFor={name}>
        {label} 
        {iconName? iconName :''} 
        
        
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