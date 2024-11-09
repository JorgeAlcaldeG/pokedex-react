import React from "react";
import "../css/subData.css";
import BarraStat from "./BarraStat.jsx";
import Calculadora from "./Calculadora.jsx";
import HabContainer from "./HabContainer.jsx";
export default function SubData({ps,atk,spatk,def,sdef,spd,hab1,hab2,hab3, hab1n, hab2n,hab3n}){
    var habList = [];
    habList.push({name: hab1n, desc:hab1, type:'comun', index:1})
    if(hab2n !== null){
        habList.push({name: hab2n, desc:hab2, type:'comun', index:2})
    }
    if(hab3n !== null){
        habList.push({name: hab3n, desc:hab3, type:'oculta', index:3})
    }
    // console.log(hab2n);
    console.log(habList.length);
    var habClassname = `habCont`+habList.length
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
                <Calculadora 
                    ps={ps}
                    atk={atk}
                    spatk={spatk}
                    def={def}
                    sdef={sdef}
                    spd={spd}
                />
            </div>
            <div className="habContainer">
            <hr />
                <div className="habs">
                    {
                        habList.map(function(e){
                            return(
                                <HabContainer
                                    key = {e.index}
                                    name = {e.name}
                                    desc = {e.desc}
                                    type = {e.type}
                                    classHab = {habClassname}
                                />
                                
                            )
                        })
                    }
                </div>
            </div>
        
        </>
    )
}