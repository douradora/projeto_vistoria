

import GlobalStyles from './styles/GlobalStyles';
import { Header } from './general/Header';
import SideBar, { IbuttonList } from './general/SideBar'
import Footer from './general/footer';
import Main from './general/Main';
import { Outlet } from 'react-router-dom';
import { buttonSidebar } from './tabelaDados';

export function App() {


  

  return (

    <>
    <Header user='Usuario'  />
      <Main>
        <Outlet />
      </Main>

      <Footer />

      <GlobalStyles /></>

  )
}

export default App
