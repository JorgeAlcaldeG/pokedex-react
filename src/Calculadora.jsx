import React from "react";
import { useState, useEffect } from "react";
import {URL} from './consts.js'
import CalcStat from "./CalcStat.jsx";
export default function Calculadora(){

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
    return(
        <>
        <select id="nat" onChange={natHandler}></select>
        <input type="number" name="lvl" id="lvl" defaultValue={lvl} />
        <CalcStat 
            name='Vida'
            base={80}
            lvlnum={lvl}
            ishp={true}
            nat = {nat}
            dimVal = ''
        />
        </>
    )
}