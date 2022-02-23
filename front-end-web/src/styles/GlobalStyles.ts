import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400 &display=swap');
    
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family:'Poppins', sans-serif;
    }

   
    #root {
    height: 100vh;
    font-size: 100%;
    background-color: #ffffe6;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: 10vh 85vh 5vh;
    gap: 6px;
    grid-template-areas: "h h"
                         "S M"
                          "F F";



    }    
   


@media(max-width:900px){

    #root{
 
    font-size: 100%;
    background-color: #ffffe6;
    display:flex;
        flex-direction:column;
    }

    

}


`;