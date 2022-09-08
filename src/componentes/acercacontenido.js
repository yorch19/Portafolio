import React from 'react'
import "./acercacontenido.css";
import {Link} from "react-router-dom";
import frontend from "../img/front end.png";
import backend from "../img/back end.png";


const acercacontenido = () => {
  return (
    <div className='acerca'>
        <div className='left'>
            <h1>¿Quién Soy Yo?</h1>
            <p>Soy un desarrollador Web Fullstack que disfruta resolver problemas y explotar la creatividad.</p>
            <Link to="/contacto.js">
            <button className='btn'>Contacto</button>
        </Link>
        </div>
        
        <div className='right'>
            <div className='img-container'>
                <div className='top'>
                    <img src={backend} className='img' alt='true'/>
                </div>
                <div className='bottom'>
                    <img src={frontend} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default acercacontenido