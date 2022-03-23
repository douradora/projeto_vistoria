import React, { MouseEventHandler, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export interface IbuttonList {

  nome: string
  path: string
  className?: string

}

export interface Sidebarprops {
  onClick?:MouseEventHandler
  display?: boolean
  buttonList: IbuttonList[]
}

const SideBar: React.FC<Sidebarprops> = ({ buttonList, display }: Sidebarprops, ) => {
  const [visible, setvisible] = useState<string>("visible")

  //seta a visibilidade da barra lateral 
  useEffect(() => {
    display ? setvisible(" visible") : setvisible(" ");

  }, [display])

  return (
    <aside key="sidebar" id="barra-lateral" className={`barra-lateral ${visible}`} >
      <nav key="sidebar-nav" className="nav-lateral">

        {buttonList.map((value,index) => {

          return <NavLink key={`${value.nome}-${index}`}  className={({isActive})=>isActive? "ativo botao" : "botao"} to={value.path}>{value.nome}</NavLink>
          
          
          })}


      </nav>







    </aside>
  );
}

export default SideBar;