import React from "react";
import "../css/barraStat.css"
export default function BarraStat({num, nom}){
    var widthValue = {
        width: `${(num / 255) * 100}%`
    };
    return(
        <div className="BarraContainer">
            <p className="statName"><b>{nom}</b> - {num}</p>
            <div className="barra" style={widthValue}></div>
        </div>
    )
}