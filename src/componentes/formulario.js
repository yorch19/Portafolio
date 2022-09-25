import "./formulario.css";
import React from 'react'

const formulario = () => {
  return (
    <div className="form">
        <form>
            <label for="name">Nombre:</label>
            <input type='text' name="name" placeholder="Ingrese su nombre"></input>

            <label for ="email">Email:</label>
            <input type='text' name="email" placeholder="Ingrese su correo electrónico"></input>

            <label for ="message">Mensaje:</label>
            <textarea name="message" rows='6' placeholder= 'Ingresa tu mensaje aquí'></textarea>

            <button type="submit" className="btn">Enviar</button>

        </form>
    </div>
  )
}
//action="mail.php" method="post" autoComplete="off"
export default formulario