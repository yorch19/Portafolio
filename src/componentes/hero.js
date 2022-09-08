import "./hero.css";
import Portada from "../img/que-son-paradigmas-programacion.jpg";
import { Link } from "react-router-dom";
import React from 'react'

const hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="portada" src={Portada} alt="portada"/>
        </div>
        <div className="contenido">
            <p>Hola, soy programador</p>
            <h1>Desarrollador Web full-stack</h1>
            <Link to="/proyectos.js" className="btn">Proyectos</Link>
        <Link to="/contacto.js" className="btn btn-light">Contacto</Link>
        </div>
        

    </div>
  )
}

export default hero