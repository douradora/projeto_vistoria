import { Scope } from '@unform/core';
import React, { ChangeEvent, useState } from 'react';
import InputFile from '../../../componetes/InputFile';
import './styles.css';
import imagem from '../../../img/adicionar.png'  
import teste from './teste-photo.png'




const Photos: React.FC = () => {

    const[photoPreview,setPhotoPreview] =useState<string[]>([]);

    function changeImg(event :ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
            return;
        }
        //pega as imagens
        const selectImages = Array.from(event.target.files);

        const imagePreview = selectImages.map(image =>{
            return URL.createObjectURL(image);
        })

        setPhotoPreview(imagePreview);
    }

    return (
    
    <div className='photos'>

        <Scope path='photos'>
        <div id='conteiner-fotos'>   
        <section className='card-photos'>
            
        {photoPreview.map((image)=>{
            return(
            <img key={image} src={image} alt="" />
            )
            
        })}
        </section>
       </div>
       

        <InputFile required multiple onChange={changeImg}  imageLabel={imagem} label='Adicionar' name='photos' accept="image/*" />
        </Scope>

    </div>

    );
}

export default Photos;