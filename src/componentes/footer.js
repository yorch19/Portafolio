import React from 'react'
import "./footer.css";
import {FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub} from "react-icons/fa";

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>

        <div className='left'>
          <div className='ubicacion'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
            <div>
              <p>Zacatecas, Zacatecas</p>
              <p>México</p>
            </div>
          </div>
          <div className='telefono'>
          <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
            
              +52 496-142-68-19</h4>
            </div>
            <div className='email'>
          <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
           yorch1905@gmail.com</h4>
          </div>
          </div>
          
          <div className='right'>
            <h4>Acerca de mi</h4>
            <p>Soy Jorge Sosa, Ingeniero en TIC.</p>
            <p>Disfruto los retos, el aprendizaje y el trabajo en equipo</p>
            <div className='redes'>
            <a href='https://www.linkedin.com/in/jorgesosa19'><FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem"}}/></a>
            <a href='https://www.github.com/yorch19'><FaGithub size={30} style={{ color: "#fff", marginRight: "2rem"}}/></a>
            </div>
          </div>
          </div> 
          <div className='copy'>Ⓒ 2022, Jorge Sosa Portafolio Profesional</div> 
        </div>
  )
}

export default footer
