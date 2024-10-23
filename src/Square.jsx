import React  from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {URL} from "./consts.js";
import "../css/square.css";
export default function Square ({ name, id, row }){
    const imgurl = URL.IMGURL+id+".png";
    const contStyle = `pkmContainer container-${row}`;
    return(
        <div className={contStyle}>
        <Link to={`profile/${id}`}>
            <img className="sprite" src={imgurl} />
            <p className="pkmName">{name}</p>
        </Link>
        </div>
    )
}