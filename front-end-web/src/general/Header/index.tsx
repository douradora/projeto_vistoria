import { MouseEventHandler, useEffect, useState } from 'react';
import menu from '../../img/menu.png';
import user_icon from '../../img/user_icon.png';
import { buttonSidebar } from '../../tabelaDados';
import MenuHeader from '../menu-header';
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
             <input type="checkbox" name="" id="icon-checked" />
            <label className='icon' for='icon-checked'><img src={menu} alt=""/></label>
            <MenuHeader buttonList={buttonSidebar} />

        </div>
        <div className="user-info">
            <p>{props.user}</p>
            <img src={user_icon} alt=""/>
        </div>
    </header>


    )

    




}