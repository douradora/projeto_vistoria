import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebarprops } from '../../../componetes/SideBar';

import  './styles.css';


export const NavBottom: React.FC<Sidebarprops> =({buttonList}:Sidebarprops,...rest)=>  {
  return (
    <nav className='button-navigation'>
      {buttonList.map((value)=>{
        return(
          <NavLink to={value.path}  
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