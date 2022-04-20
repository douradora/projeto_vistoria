import { Scope, useField } from '@unform/core';
import React, { ChangeEvent, cloneElement, MouseEventHandler, useEffect, useRef, useState } from 'react';
import InputFile from '../../../componetes/InputFile';
import './styles.css';
import imagem from '../../../img/adicionar.png'






const Photos: React.FC = () => {

    const [photoPreview, setPhotoPreview] = useState<string[]>([]);
    const [filesImages, setFilesImages] = useState<File[]>([]);
  


    const inputRef = useRef<HTMLInputElement>(null);
    //nome do campo que vai ser capturado deve ser inserido no useField
    const {fieldName,defaultValue,registerField,error}=useField('photos');


    useEffect(()=>{
      salvarPreview(filesImages)
      
      registerField({
        name:fieldName,
        ref:inputRef,
        getValue: ref=>{
          return  filesImages;
        },
        //implementar aqui  como vai implementado para manter o estado
        setValue:(ref,value)=>{
            
        },
        clearValue:ref=>{
          
        },

    })
     
    },[filesImages,fieldName,registerField,inputRef])

 
  
  

    //funcao captura as imagens e joga num array

    function chooseImg() {
       const files :File[]=inputRef.current?.files;
      
        if (files?.length===0) {
            return;
        }
        if (photoPreview.length >= 6) {
            return;

        }
      
        const selectImages:File[] = Array.from(files);
      
        selectImages.map((item)=>{
            setFilesImages([...filesImages, item]);
            
        })

       
     
        
      
    }

    
    
  
    function salvarPreview(files:File[]){
        const imagePreview = files.map(image =>{
           
           return URL.createObjectURL(image);
         
            })
         
        setPhotoPreview(imagePreview)

    }


    function removeImages(e:MouseEventHandler<HTMLImageElement>) {
    
        var index = photoPreview.findIndex(src => {
            return src == e.target.src;
        });

        var novoArray:File[] = [];

        filesImages.map((value, i) => {
            if (i == index) {
                return;
            }
            novoArray.push(value);
        })
        setFilesImages(novoArray);
       
    }





    return (

        <div className='photos'>

            <Scope path='Photos'>
                <div id='conteiner-fotos'>
                    <section className='card-photos'>
                           
                        {
                         photoPreview.map((image, index) => {
                            return (
                                <img onClick={removeImages} key={image} src={image} alt="" />
                            )

                        })}
                    </section>
                </div>


                <InputFile required  onChange={chooseImg} imageLabel={imagem} label='Adicionar' ref={inputRef} name='photos' accept="image/*" />
            </Scope>

        </div>

    );
}

export default Photos;