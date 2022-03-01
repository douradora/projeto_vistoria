import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import "./styles.css"

export interface IOptions {
    id: string|number
    label: string
}

interface Props {
    name: string
    options: IOptions[]



}

type InputProps = JSX.IntrinsicElements['input'] & Props;


function RadioInput({ name, type, options, ...rest }: InputProps) {

    const inputRef = useRef<HTMLInputElement[]>([]);

    const { fieldName, defaultValue, registerField, error } = useField(name);


    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            getValue(refs) {
                const checked = refs.find(ref => ref.checked);

                return checked ? checked.value : null;
            },
            setValue(refs, value) {
                const item = refs.find(ref => ref.value === value);

                if (item) {
                    item.checked = true;
                }
            }
        });
    }, [fieldName, registerField]);

    return (
        <>
            {options.map((option, index) => {
                return(
                <div className='radioBox'>
                <label key={option.id} htmlFor={option.id}>{option.label} </label>
                
                <input
                        id={option.id}
                        ref={elRef => (inputRef.current[index] = elRef)}
                        type="radio"
                        name={fieldName}
                        value={option.id}
                        defaultChecked={defaultValue === option.id} />
                </div>
                   
               
                )
                

            }



            )

            }



        </>


    );
}

export default RadioInput;