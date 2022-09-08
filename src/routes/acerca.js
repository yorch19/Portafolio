import React from 'react'
import Navbar from '../componentes/navbar.js';
import Hero2 from '../componentes/hero2.js';
import Contenido from '../componentes/acercacontenido.js';
import Pie from '../componentes/footer.js';

const acerca = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 titulo="Acerca de mi" subtitulo="Un breve resumen sobre mi"/>
      <Contenido/>
      <Pie/>
    </div>
  )
}

export default acerca