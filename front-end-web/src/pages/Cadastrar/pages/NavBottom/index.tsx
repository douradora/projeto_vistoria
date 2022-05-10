import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebarprops } from '../../../../general/SideBar';

import  './styles.css';


export const NavBottom: React.FC<Sidebarprops> =({buttonList}:Sidebarprops,...rest)=>  {
  return (
    <nav  key="botaoDeNavegaçao"className='button-navigation'>
      {buttonList.map((value)=>{
        return(
          <NavLink   key={value.nome}  to={value.path}  
          className={({isActive})=>isActive? 
          `${value.className?value.className+ " ":""}active button-navigation`:
          `${value.className?value.className+ " ":""}button-navigation`} 
            {...rest}
          >

          {value.nome}

          </NavLink>

        )

      
      
      })}
      </nav>
      
      )
    
  }
export default NavBottom;