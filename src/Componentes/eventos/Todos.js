import React from 'react'
import Minievento from './Minievento'

import '../../css/index.css'

export default class TodosEventos extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      eventos:[]
    }
  }

  componentDidMount(){
    fetch(`http://52.67.245.155/php/selevento.php?`)
    .then( response => response.json())
    .then(responseJson => this.setState({'eventos': responseJson}));
  }

  render(){
    return(
      
        <div className="flex bet margin fwrap">
          {this.state.eventos && this.state.eventos.map(even => (
              <Minievento 
                key={even.id_evento}
                id={even.id_evento}  
                imagem={even.imagem} 
                nome={even.nome_evento}
              />
          ))}
        </div>
      
    )
  }
}