import React from "react";
import "./index.css";
import Home from "./routes/home.js";
import Acerca from "./routes/acerca.js";
import Contacto from "./routes/contacto.js";
import Proyecto from "./routes/proyectos.js";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/acerca.js" element={<Acerca/>} />
           <Route path="/contacto.js" element={<Contacto/>} />
           <Route path="/proyectos.js" element={<Proyecto/>} />
      </Routes>
    </>
  );
}

export default App;
