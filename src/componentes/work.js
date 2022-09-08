import "./workcard.css";
import Workcard from "./workcard.js";
import workcarddata from "./workcarddata.js"
import React from 'react'
const work = () => {
  return (
    <div className="work-container">
        <h1 className="pro-heading">Proyectos</h1>
        <div className="pro-container">
            {workcarddata.map((val, ind)=>{
                return(
                    <Workcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    titulo={val.titulo}
                    texto={val.texto}
                    ver={val.ver}
                    codigo={val.codigo} />
                );
            })}
        </div>
    </div>
  )
}

export default work