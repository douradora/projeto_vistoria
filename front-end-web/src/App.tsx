

import GlobalStyles from './styles/GlobalStyles';
import { Header } from './componetes/Header';
import SideBar, { IbuttonList } from './componetes/SideBar'
import Footer from './componetes/footer';


import { useState } from 'react';

import Main from '../src/componetes/Main';
import { Outlet } from 'react-router-dom';


export function App() {

  const buttonSidebar: IbuttonList[] = [{ nome: "Home", className: "botao", path: "/" },
  { nome: "Vistorias", className: "botao", path: "vistorias" },
  { nome: "Cadastrar", className: "botao", path: "cadastrar" }];

  //faz o botao aparecer e sumir quando em tela de menor 
  const [display, setDislay] = useState<boolean>(false)

  function hiddenMenu() {
    setDislay(!display);

  }

  return (

    <>
    <Header user='Usuario' acao={hiddenMenu} />

      <SideBar buttonList={buttonSidebar} display={display} />
      <Main>
        <Outlet />
      </Main>

      <Footer />

      <GlobalStyles /></>

  )
}

export default App
