import React from "react";
import { useState, useEffect } from "react";
import {URL} from './consts.js'
export default function Calculadora(){

    const [lvl, setlvl] = useState(50);
    const [isLoading, setIsLoading] = useState(true);
    const [nat, setNat] = useState("");
    useEffect (()=>{
        console.log(`${URL.APIURL}getNat.php`);
        fetch(`${URL.APIURL}getNat.php`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if(typeof data["status"] == 'undefined'){
                var natSel = '<select name="natu"><option>Naturalezas</option>'
                data.map(function(e){
                    var value = ''; 
                    if(e.sube !== 'null'){
                        value = `(+${e.sube} -${e.baja})`
                    }
                    natSel +=`<option>${e.nom_natu} ${value}</option>`
                    document.getElementById("natSelector").innerHTML = natSel;
                })
                natSel +=`</select>`
                console.log(natSel)
                setIsLoading(false);
            }else{
                console.log(data["detail"])
                setIsLoading(false);
            }
        })
    },[])
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return(
        <>
        <div id="natSelector"></div>
        <input type="number" name="lvl" id="lvl" value={lvl} />
        </>
    )
}