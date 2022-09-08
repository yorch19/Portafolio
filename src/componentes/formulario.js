import "./formulario.css";
import React from 'react'

const formulario = () => {
  return (
    <div className="form">
        <form>
            <label>Nombre:</label>
            <input type='text'></input>
            <label>Email:</label>
            <input type='text'></input>
            <label>Asunto:</label>
            <input type='text'></input>
            <label>Mensaje:</label>
            <textarea rows='6' placeholder= 'Ingresa tu mensaje aquí'></textarea>
            <button className="btn">Enviar</button>
        </form>
    </div>
  )
}

export default formulario