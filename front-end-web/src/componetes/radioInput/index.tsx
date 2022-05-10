import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';


export interface IOptions {
    id: string | number
    label?: string
}

interface Props {
    name: string
    options: IOptions[]



}

type InputProps = JSX.IntrinsicElements['input'] & Props;


function RadioInput({ name, type, options, className = "radioBox", ...rest }: InputProps) {

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
                return (
                    <div   key={`${option.label}-${index}-div`} className={className}>
                        <label   key={`${option.label}-${index}-label`} >

                            <input
                                required
                                key={`${option.label}-${index}-input`}
                                id={option.id}
                                ref={elRef => (inputRef.current[index] = elRef)}
                                type="radio"
                                name={fieldName}
                                value={option.id}
                                
                                defaultChecked={defaultValue === option.id} />
                                <span>{option.label}</span>
                        </label>
                    </div>


                )


            }



            )

            }



        </>


    );
}

export default RadioInput;