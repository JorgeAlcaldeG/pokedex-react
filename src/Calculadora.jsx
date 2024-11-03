import React from "react";
import { useState, useEffect } from "react";
import {URL} from './consts.js'
import CalcStat from "./CalcStat.jsx";
import '../css/calculadora.css';
export default function Calculadora({ps,atk,spatk,def,sdef,spd}){

    const [lvl, setlvl] = useState(50);
    const [nat, setNat] = useState("")
    useEffect (()=>{
        // console.log(`${URL.APIURL}getNat.php`);
        fetch(`${URL.APIURL}getNat.php`)
        .then(resp => resp.json())
        .then(data => {
            if(typeof data["status"] == 'undefined'){
                var natSel = '<option value="">Naturalezas</option>'
                data.map(function(e){
                    var value = ''; 
                    var natVal = '';
                    if(e.sube != null){
                        value = `(+${e.sube} -${e.baja})`
                        natVal = `${e.sube}-${e.baja}`
                    }else{
                        value = '(neutra)'
                        natVal = '';
                    }
                    natSel +=`<option value="${natVal}">${e.nom_natu} ${value}</option>`
                    document.getElementById("nat").innerHTML = natSel;
                })
            }else{
                console.log(data["detail"])
            }
        })
    },[])
    function natHandler(){
        setNat(document.getElementById('nat').value)
    }
    function lvlHandler(){
        setlvl(document.getElementById('lvl').value)
    }
    return(
        <>
            <select id="nat" onChange={natHandler}></select>
            <input type="number" name="lvl" id="lvl" defaultValue={lvl} onKeyUp={lvlHandler} />
            <div className="calcContainer">
                <CalcStat 
                    name='Vida'
                    base={ps}
                    lvlnum={lvl}
                    ishp={true}
                    nat = {nat}
                    dimVal = ''
                />
                <CalcStat 
                    name='Ataque'
                    base={atk}
                    lvlnum={lvl}
                    ishp={false}
                    nat = {nat}
                    dimVal = 'Atk'
                />
                <CalcStat 
                    name='Ataque Esp.'
                    base={spatk}
                    lvlnum={lvl}
                    ishp={false}
                    nat = {nat}
                    dimVal = 'SpA'
                />
                <CalcStat 
                    name='Defensa'
                    base={def}
                    lvlnum={lvl}
                    ishp={false}
                    nat = {nat}
                    dimVal = 'Def'
                />
                <CalcStat 
                    name='Defensa Esp.'
                    base={sdef}
                    lvlnum={lvl}
                    ishp={false}
                    nat = {nat}
                    dimVal = 'SpD'
                />
                <CalcStat 
                    name='Velocidad'
                    base={spd}
                    lvlnum={lvl}
                    ishp={false}
                    nat = {nat}
                    dimVal = 'Vel'
                />
            </div>
        </>
    )
}