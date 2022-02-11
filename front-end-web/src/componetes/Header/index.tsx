import { MouseEventHandler, useEffect, useState } from 'react';
import menu from '../../img/menu.png';
import user_icon from '../../img/user_icon.png';
import "./styles.css"

export type headerProps={
    user:string
    photo?:string
    id?:string
    acao?:MouseEventHandler
}



export const Header: React.FC<headerProps> = (props:headerProps)=>{
    
    




    return(
        <header className="header">
        <button onClick={props.acao} id="menu-icon" className="menu">
            <img src={menu} alt=""/>
        </button>
        <div className="user-info">
            <p>{props.user}</p>
            <img src={user_icon} alt=""/>
        </div>
    </header>


    )

    




}