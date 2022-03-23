import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebarprops } from '../../../componetes/SideBar';

import  './styles.css';


export const NavBottom: React.FC<Sidebarprops> =({buttonList,onClick,...rest}:Sidebarprops,)=>  {
  return (
    <nav  key="botaoDeNavegaçao"className='button-navigation'>
      {buttonList.map((value)=>{
        return(
          <NavLink   key={value.nome} onClick={onClick} to={value.path}  
          className={({isActive})=>isActive? 
          `${value.className?value.className+ " ":""}active button-navigation`:
          `${value.className?value.className+ " ":""}button-navigation`} 
          >

          {value.nome}

          </NavLink>

        )

      
      
      })}
      </nav>
      
      )
    
  }
export default NavBottom;