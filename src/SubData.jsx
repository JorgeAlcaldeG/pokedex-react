import React from "react";
import "../css/subData.css";
import BarraStat from "./BarraStat.jsx";
import Calculadora from "./Calculadora.jsx";
export default function SubData({ps,atk,spatk,def,sdef,spd}){
    return(
        <>
            <div className="container100">
                <h1>Stats base</h1>
            </div>
            <div className="subContainer statCont">
                <BarraStat 
                    nom= "Vida"
                    num ={ps}
                />
                <BarraStat 
                    nom= "Ataque"
                    num ={atk}
                />
                <BarraStat 
                    nom= "Ataque especial"
                    num ={spatk}
                />
                <BarraStat 
                    nom= "Defensa"
                    num ={def}
                />
                <BarraStat 
                    nom= "Defensa especial"
                    num ={sdef}
                />  
                <BarraStat 
                    nom= "Velocidad"
                    num ={spd}
                />      
            </div>
            <div className="subContainer calcCont">
                <Calculadora />
            </div>
            <div className="habContainer">
            <hr />

            </div>
        
        </>
    )
}