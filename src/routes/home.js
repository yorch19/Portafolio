import React from 'react'
import Navbar from '../componentes/navbar.js';
import Hero from '../componentes/hero.js';
import Pie from '../componentes/footer.js';


const home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>

      <Pie/>
    </div>
  )
}

export default home