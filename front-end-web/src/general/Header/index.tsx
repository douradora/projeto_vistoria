import { MouseEventHandler, useEffect, useState } from 'react';
import menu from '../../img/menu.png';
import user_icon from '../../img/user_icon.png';
import { buttonSidebar } from '../../tabelaDados';
import SideBar from '../SideBar';
import "./styles.css"

export type headerProps={
    user:string
    photo?:string
    id?:string
    acao?:MouseEventHandler
}



export const Header: React.FC<headerProps> = (props:headerProps)=>{
    
    




    return(
        <header   className="header">
        <div id="menu-icon" className="menu">

            <div className='icon'><img src={menu} alt=""/></div>
            <SideBar buttonList={buttonSidebar} ></SideBar>

        </div>
        <div className="user-info">
            <p>{props.user}</p>
            <img src={user_icon} alt=""/>
        </div>
    </header>


    )

    




}