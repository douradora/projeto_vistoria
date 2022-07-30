import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    


 #root {
    height: 100vh;
     display: flex;
    flex-direction: column;
    
    }    
   


html{
    background-color: #f5f5f4;
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
    background-color: #f4f4f4;
    display:flex;
    flex-direction:column;
    }        


}



`;