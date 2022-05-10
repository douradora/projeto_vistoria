import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    


 #root {
    height: 100vh;
 
    background-color: #ffffe6;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: 10vh 85vh 5vh;
    gap: 6px;
    grid-template-areas: "h h"
                         "M M"
                          "F F";

    }    
   
 .corpo {
    width: 100%;
    border-radius: 10px 0px 0px 10px;
    background-color: #ffffff;
    box-shadow: 5px 5px 5px 5px #8d9aad;
    display: flex;
    flex-direction: row;
    gap: 20px; 
    align-items: center;
    gap: 5px;
    grid-area: M;
 

}

.rodape {
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    background: linear-gradient(to right, #ffffff -9%, #ff0000 100%);
    border-top: #dfdfd1 0.1mm solid;
    grid-area: F;


    }
.conteudo {
    width: 90%;
    height: 100%;
  
}


    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family:'Poppins', sans-serif;
        font-size: 16px;
    }

   



@media(max-width:900px){

#root{
    font-size: 70%;
    background-color: #ffffe6;
    display:flex;
    flex-direction:column;
    }        
.corpo{ 
    width: 100%;
    height: 98vh
    }
    


}



`;