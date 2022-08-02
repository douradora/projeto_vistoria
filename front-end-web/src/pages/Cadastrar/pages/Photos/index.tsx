import { Scope, useField } from '@unform/core';
import React, { ChangeEvent, cloneElement, MouseEventHandler, useEffect, useRef, useState } from 'react';
import InputFile from '../../../../componetes/InputFile';
import './styles.css';
import { AddOutline } from 'react-ionicons';
import { useOutletContext } from 'react-router-dom';






const Photos: React.FC = () => {

  //compartilhando imagens no contexto global
  const [dadosForm, setDadosForm] = useOutletContext()


  const Icon = (<AddOutline
    color={'#595959'}

    cssClasses={'button-adicionar'}
  />);

  //criar as preview
  const [photoPreview, setPhotoPreview] = useState<string[]>([]);




  useEffect(() => {

    const { photos } = dadosForm;

    if (photos) {
      salvarPreview(photos);
    }


  }, [dadosForm])






  /**
   * 
   * @param files recebe um arquivo de foto , retorna no estado 
   */


  function salvarPreview(files: File[]) {
    const imagePreview = files.map((image) => {

      return [image.name, URL.createObjectURL(image)];

    })

    setPhotoPreview(imagePreview)

  }


  function removeImages(event: MouseEventHandler<HTMLImageElement, MouseEvent>) {

    const { photos } = dadosForm;
    var newPhotos: any = [];
    photos.map(value => {
      if (value.name === event.target.alt) {
        return
      }
      newPhotos.push(value);

    })

    setDadosForm({ ...dadosForm, "photos": newPhotos })

  }





  return (

    <div className='photos'>


      <div id='conteiner-fotos'>
        <section className='card-photos'>
          {photoPreview.map((img) => {
            return <img src={img[1]} key={img[0]} alt={[img[0]]} onClick={removeImages} />

          })}

        </section>
      </div>


      <InputFile required className='adicionar' label={Icon} name='photos' accept="image/*" />


    </div>

  );
}

export default Photos;