import React from 'react';
import "./style.css"



interface MainProps {
}
const Main: React.FC<MainProps> = (props) => {
  return (

    <div className='corpo' >

      <main className="conteudo">
        {props.children}
      </main>



    </div>




  );
}

export default Main;