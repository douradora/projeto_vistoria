import React, {  useEffect, useRef } from 'react';
import { useField } from '@unform/core';





interface props{
    name:string
    label:string
    options:{id:string
            name:string
        }[]
    

}

type SelectProps = JSX.IntrinsicElements['select'] & props;


 const Select: React.FC<SelectProps> = ({name,label,options,...rest}) => {

    const selectRef = useRef<HTMLInputElement>(null);
        
    const {fieldName,defaultValue,registerField,error}=useField(name);


    useEffect(()=>{
       
        //@ts-ignore
        registerField({
            name:fieldName,
            ref:selectRef,
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
        
    
    return (
        <>
        <label htmlFor={fieldName}>{label} </label>
        <select id={fieldName}
        ref={selectRef}
       
        {...rest}
        >
        
        {options.map((value)=>{
             
        if(defaultValue==value.id){
              return  <option   selected key={value.name} id={value.id} value={value.id}>{value.name}</option>
            }
            return  <option   key={value.name} id={value.id} value={value.id}>{value.name}</option>
        })}

      

        </select>
        
        </>
        
  );
}

export default Select;