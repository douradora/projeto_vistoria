import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App} from '../App';
import Cadastrar from '../pages/Cadastrar';
import Cabecalho from '../pages/Cadastrar/Cabecalho';
import Infors from '../pages/Cadastrar/infors';
import Home from '../pages/Home/Home';
import Vistoria from '../pages/Vistoria/Vistoria';

// import { Container } from './styles';

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index   element={<Home/>}/>
                    <Route path='vistorias' element={<Vistoria />} />
                     <Route path='cadastrar' element={<Cadastrar />} >
                        <Route index  element={<Cabecalho/>}/>
                        <Route path="dadosVeiculo" element={<Cabecalho/>}/>
                        <Route path='infor'  element={<Infors/>}/>
                        <Route path='obs'  element={<p>observa</p>}/>
                        <Route path='dadosVistoria'  element={<p>vistoria</p>}/>
                        <Route path='fotos'  element={<p>photos</p>}/>


                        </Route>
                    <Route path='*' element={<div><span>Erro ao fazer requisiçao</span></div>} />

                </Route>
            </Routes>




        </BrowserRouter>
    );

}

export default Routes;