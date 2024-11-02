import React from "react";
import { useState, useEffect } from "react";
import "../css/calcStat.css"
export default function CalcStat({ishp, base, nat, name, lvlnum, dimVal}){
    const [evs, setEvs] = useState(0);
    const [ivs, setIvs] = useState(31);
    const [lvl, setLvl] = useState(lvlnum);
    const [total, setTotal] = useState(0);
    var natBase = nat.split('-')
    var mult = 1
    if(natBase.length != 1){
        if(dimVal == natBase[0]){
            mult = 1.1
        }else if(dimVal == natBase[1]){
            mult = 0.9
        }
    }
    const [natVal, setNat] = useState(mult);
    useEffect(()=>{
        if(ishp){
            setTotal(Math.trunc(((((2*base)+ivs+(evs/4))*lvl)/100)+lvl+10))
        }
    },[evs, ivs])
    // useEffect(()=>{
    //     if(ishp){
    //         setTotal(Math.trunc(((((2*base)+ivs+(evs/4))*lvl)/100)+lvl+10))
    //     }
    // },[])
    return(
        <div className="statElem">
            <label>{name}</label>
            <input type="number" defaultValue={ivs} min={0} max={31} onChange={(event) => setIvs(event.target.value)} />
            <input type="range" min={0} max={252} value={evs} onChange={(event) => setEvs(event.target.value)} />
            <input type="number" value={evs} max={252} min={0} onChange={(event) => setEvs(event.target.value)} />
            <input type="number" value={total} readOnly />
        </div>
    )
}