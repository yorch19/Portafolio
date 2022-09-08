import React, { Component } from 'react'
import "./hero2.css";


class hero2 extends Component{
  render (){
    return (
    <div className="hero2">
    
    <div className="contenido2">
        <h1>{this.props.titulo}</h1>
        <p>{this.props.subtitulo}</p>
        
    </div>
    

</div>
  )
}
}

export default hero2