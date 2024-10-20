import React  from 'react';
import { Link } from "react-router-dom";
import {URL} from "./consts.js";
import "../css/square.css";
export default function Square ({name,id}){
    const imgurl = URL.IMGURL+id+".png";
    return(
        <div className='pkmContainer'>
        <Link to={`profile/${id}`}>
            <img className="sprite" src={imgurl} />
            <p className="pkmName">{name}</p>
        </Link>
        </div>
    )
}