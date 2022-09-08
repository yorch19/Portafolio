import "./navbar.css";
import React, {useState}  from 'react';
import { Link } from "react-router-dom"; 

const navbar = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [color, setColor] = useState (false);
    const changeColor = () =>{
        if(window.scrollY>=1){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portafolio</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/proyectos.js">Proyectos</Link>
            </li>
            <li>
                <Link to="/acerca.js">Acerca De</Link>
            </li>
            <li>
                <Link to="/contacto.js">Contacto</Link>
            </li>
        </ul>
    </div>
  )
}

export default navbar