import React from 'react'
import Navbar from '../componentes/navbar.js';
import Hero2 from '../componentes/hero2.js';
import Form from '../componentes/formulario.js';
import Pie from '../componentes/footer.js';

const contacto = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 titulo="Contacto" subtitulo="¿Tienes algún proyecto en mente? Contáctame"/>
      <Form/>
      <Pie/>
    </div>
  )
}

export default contacto