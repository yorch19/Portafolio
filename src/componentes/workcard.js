import "./workcard.css";
import React from 'react'

const workcard = (props) => {
  return (
    <div className="pro-card">
                <img src={props.imgsrc} alt="imagen"/>
                <h2 className="pro-titulo">{props.titulo}</h2>
                <div className="pro-detalles">
                    <p>{props.texto}</p>
                </div>
                <div className="pro-btns">
                    <a href={props.ver} className="btn">Ver</a>
                    <a href={props.codigo}  className="btn">Código</a>
                </div>
            </div>
  )
}

export default workcard