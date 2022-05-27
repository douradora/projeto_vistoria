import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App} from '../App';
import Cadastrar from '../pages/Cadastrar';
import Cabecalho from '../pages/Cadastrar/pages/Cabecalho';
import Infors from '../pages/Cadastrar/pages/situacoes';
import Obs from '../pages/Cadastrar/pages/Obs';
import Home from '../pages/Home/Home';
import Vistoria from '../pages/Listar_vistorias/Listar_vistorias';
import VistoriaDados from '../pages/Cadastrar/pages/VistoriaDados';
import Photos from '../pages/Cadastrar/pages/Photos';
import Condutor from '../pages/Cadastrar/pages/Condutor';
import Envio from '../pages/Cadastrar/pages/Envio';

// import { Container } from './styles';

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index   element={<Home/>}/>
                    <Route path='vistorias' element={<Vistoria />} />
                     <Route path='cadastrar' element={<Cadastrar />} >
                        <Route index  element={<Cabecalho/>} />
                        <Route path="dadosVeiculo" element={<Cabecalho/>}/>
                        <Route path='infor'  element={<Infors/>}/>
                        <Route path='obs'  element={<Obs/>}/>
                        <Route path='dadosVistoria'  element={<VistoriaDados/>}/>
                        <Route path='fotos'  element={<Photos/>}/>
                        <Route path='condutor'  element={<Condutor/>}/>
                        <Route path='envio'  element={<Envio/>}/>


                        </Route>
                    <Route path='*' element={<div><span>Erro ao fazer requisiçao</span></div>} />

                </Route>
            </Routes>




        </BrowserRouter>
    );

}

export default Routes;