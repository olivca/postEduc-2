import React  from 'react';

import '../../css/index.css'

import Minievento from './Minievento'
import Minicategoria from './Minicategoria'
import Caroussel from '../carrossel/Carousel'
import Sugestoes from '../Modal/Sugestoes'
import Pessoa from '../../Img/pessoa1.png'
export default class PaginaDeEvento extends React.Component{

constructor(props){
  super(props);
  this.state = {
    db: []
  };
}

componentDidMount(){
  fetch("http://52.67.245.155/php/carrousel.php")
  .then( response => response.json())
  .then(responseJson => this.setState({'db': responseJson}));
}

  render(){
    return(
      <div>
        
          <Caroussel/>

        <div className="flex altura benef">
          <p>Populares</p>
          {/*<a href="http://localhost:3000/">+ Ver Todos</a>*/}
        </div>

        <div className="flex bet margin fwrap">
            
            {this.state.db && this.state.db.map(arrayevento => (
                <Minievento key={arrayevento.id_evento}
                            id={arrayevento.id_evento}  
                            imagem={arrayevento.imagem} 
                            nome={arrayevento.nome_evento}
                />
            ))}
         
        </div>

         {/*<div className="borda margin center informacoes">

          <h2 className="borda margin  info"> + Crie um Grupo de estudos</h2>
          <h3 className="cor">Area em fase de desenvolvimento</h3> 

        </div>*/}
        <div className="flex altura categ">
          <p>Categorias</p>
        </div>

        <div className="flex bet margin fwrap">
        
          <Minicategoria/>
          <Minicategoria/>
          <Minicategoria/>
          <Minicategoria/> 
        </div>
      
        <div className="row bg-light">
            <div className=".col-md-12">
              <img src={Pessoa} width="237" height="234" alt="login" className="pessoa mb-2"/>
            </div>
            <div className="margin center informacoes .col-md-8 mt-6">
              <h4 className="margin info">Não encontrou um Curso ou Evento de seu interesse? Nos ajude a melhorar o postEduc</h4>
              <Sugestoes />
            </div>  
        </div>
      </div>
    )
  }
}