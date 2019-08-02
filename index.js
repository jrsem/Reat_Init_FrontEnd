//chamando as modulos e objetos da biblioteca
import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

//my first component
//Components Name devem começar com letra maisculo;
const MyApp = () => {
  return (
    <Fragment>
      <h2>Hello World</h2>
    </Fragment>
  )
}

//vi lá no DOM, procurar o id chamado "app" e colocar este componente "<firstComp/>" lá
ReactDom.render(<MyApp />, document.getElementById('app'));