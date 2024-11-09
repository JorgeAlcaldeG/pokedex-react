import React from "react";
import "../css/habContainer.css";
export default function HabContainer({name, desc, type, classHab}){
    return(
        <div className={classHab}>
            <h1 className="habTitulo">{name}</h1>
            <p className="habDesc">{desc}</p>
        </div> 
    )
}