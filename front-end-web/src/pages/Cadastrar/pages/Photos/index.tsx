import { Scope, useField } from '@unform/core';
import React, { ChangeEvent, cloneElement, MouseEventHandler, useEffect, useRef, useState } from 'react';
import InputFile from '../../../../componetes/InputFile';
import './styles.css';
import {AddCircleOutline} from 'react-ionicons';
import { useOutletContext } from 'react-router-dom';






const Photos: React.FC = () => {
    
    //compartilhando imagens no contexto global
    const [dadosForm, setDadosForm] = useOutletContext()
    
    
    const Icon =(<AddCircleOutline
                    color={'#00000'}
                    cssClasses={'button-adicionar'}
                />);

    const [photoPreview, setPhotoPreview] = useState<string[]>([]);
  
    const photoRef = useRef(null)


  useEffect(()=>{
    const {photos} =dadosForm;
    
    if(photos){
        salvarPreview(photos);
    }
    

  },[dadosForm,photoRef])



    
    
  
    function salvarPreview(files:File[]){
        const imagePreview = files.map(image =>{
           
           return URL.createObjectURL(image);
         
            })
         
        setPhotoPreview(imagePreview)

    }


    // function removeImages(e:MouseEventHandler<HTMLImageElement>) {
    
    //     var index = photoPreview.findIndex(src => {
    //         return src == e.target.src;
    //     });

    //     var novoArray:File[] = [];

    //     filesImages.map((value, i) => {
    //         if (i == index) {
    //             return;
    //         }
    //         novoArray.push(value);
    //     })
    //     setFilesImages(novoArray);
       
    // }

   



    return (

        <div className='photos'>

            <Scope  path='photos'>
                <div id='conteiner-fotos'>
                    <section className='card-photos'>
                      {photoPreview.map((img)=>{
                        return   <img src={img} alt="" />
                          
                      })}       
                     
                    </section>
                </div>


                <InputFile required   multiple className='adicionar'  iconName={Icon} label=' ' name='photos' accept="image/*" />
            </Scope>

        </div>

    );
}

export default Photos;