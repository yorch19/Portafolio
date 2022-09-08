import React from 'react'
import Navbar from '../componentes/navbar.js';
import Hero2 from '../componentes/hero2.js';
import Pie from '../componentes/footer.js';
import Trabajo from '../componentes/work.js';

const proyectos = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 titulo="Proyectos" subtitulo="Muestras de mi trabajo"/>
      <Trabajo/>
      <Pie/>
    </div>
  )
}

export default proyectos