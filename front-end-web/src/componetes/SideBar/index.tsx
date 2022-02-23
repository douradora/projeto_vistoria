import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './styles.css';

export interface Sidebarprops {
  display?: boolean



}

const SideBar: React.FC<Sidebarprops> = ({ display }: Sidebarprops) => {
        const [visible,setvisible] = useState<string>("visible")

      useEffect(()=>{
          display?setvisible(" visible"):setvisible(" ");

      },[display])

  return (
    <aside id="barra-lateral" className={"barra-lateral " + `${visible}`} >

      <Link className='botao' to='/'>Home</Link>
      <Link className='botao' to='/vistorias'>Vistoria</Link>
      <Link className='botao' to='/cadastrar'>Cadastrar</Link>
      <Link className='botao' to='#'>Algo2</Link>




    </aside>
  );
}

export default SideBar;