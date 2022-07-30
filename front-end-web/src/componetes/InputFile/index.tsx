import { useField } from '@unform/core';
import React, { useEffect, useRef, forwardRef } from 'react';
import { IconType } from 'react-icons';


interface Props {
    name: string
    label?: string
    iconName?: IconType



}

type InputProps = JSX.IntrinsicElements['input'] & Props;


// import { Container } from './styles';

const InputFile: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, iconName, className, ...rest }: InputProps, ref) => {

    const inputRef = useRef<HTMLInputElement>(null);
    //nome do campo que vai ser capturado deve ser inserido no useField
    const { fieldName, defaultValue, registerField, error } = useField('photos');



    useEffect(() => {
    
//@ts-ignore
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path:'files',
            getValue: (ref:HTMLInputElement) => {
                return ref.files && Array.from(ref.files);
              },
              
              clearValue: (ref:HTMLInputElement)=> {
                ref.value = ''
              },
            
        })
      

    }, [fieldName, registerField, inputRef])



    return (
        <div className={className}>
            {label && <label htmlFor={name}>
                {label}
               
                

            </label>}


            <input id={name}
                name={name}
                type="file"
                ref={inputRef}
                    
                {...rest} />

        </div>

    );
}

export default forwardRef(InputFile);