import React from "react";
import { useState, useEffect } from "react";
import "../css/calcStat.css"
export default function CalcStat({ishp, base, nat, name, lvlnum, dimVal}){
    const [evs, setEvs] = useState(0);
    const [ivs, setIvs] = useState(31);
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
    // console.log(`${natBase[0]} - ${mult}`)
    const [natVal, setNat] = useState(mult);
    // console.log(lvlnum)
    useEffect(()=>{
        if(ishp){
            setTotal(Math.trunc(((((2*base)+parseInt(ivs)+(evs/4))*parseInt(lvlnum))/100)+parseInt(lvlnum)+10))
        }else{
            setTotal(Math.trunc((Math.trunc(((((2*base)+parseInt(ivs)+Math.trunc((evs/4)))*parseInt(lvlnum))/100))+5)*mult))
        }
    },[evs, ivs, lvlnum, nat])
    return(
        <div className="statElem">
            <input type="number" className="inputnum" value={total} readOnly />
            <input type="number" className="inputnum" value={evs} max={252} min={0} onChange={(event) => {
                    event.target.value < 0 ?  event.target.value = 0 : '';
                    event.target.value > 252 ?  event.target.value = 252 : '';
                    event.target.value == "" ? setEvs(0) : setEvs(event.target.value);
                }} />
            <input type="range" min={0} max={252} value={evs} onChange={(event) => setEvs(event.target.value)} />
            <input type="number" className="inputnum" defaultValue={ivs} min={0} max={31} onChange={(event) => {
                    event.target.value < 0 ?  event.target.value = 0 : '';
                    event.target.value > 31 ?  event.target.value = 31 : '';
                    event.target.value == "" ? setIvs(0) : setIvs(event.target.value);
                }} />
            <input type="number" className="inputnum" value={base} readOnly />
            <label className="statLabel">{name}</label>
        </div>
    )
}