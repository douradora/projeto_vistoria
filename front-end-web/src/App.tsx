
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { Header } from './componetes/Header';
import SideBar from './componetes/SideBar'


import Footer from './componetes/footer';
import Home  from './pages/Home/Home';
import Vistoria from './pages/Vistoria/Vistoria';
import { useState } from 'react';
import Cadastrar from './pages/Cadastrar';



function App() {

    const [display,setDislay] = useState<boolean>(true)

    function hiddenMenu(){  
          setDislay(!display);

    }

  return (
    <BrowserRouter>
  
      <Header user='Usuario' acao={hiddenMenu} />
      <SideBar display={display}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/vistorias' element={<Vistoria/>} />
        <Route path='/cadastrar' element={<Cadastrar/>}/>
      </Routes>
    
      <Footer />

     
      <GlobalStyles />
    </BrowserRouter>

  )
}

export default App
