import React from "react";
import { useParams } from 'react-router';
import {URL} from "./consts.js";
import '../css/MainData.css';
export default function MainData( {nombre, cat, reg, desc, hab1, hab2, hab3} ){
    const id = useParams();
    const imgurl = URL.IMGURL+id.pkmid+".png";
    hab2 === null ? hab2='':'';
    hab3 === null ? hab3='':'';
    // id.pkmid
    return(
        <>
            <div className="img-col">
                <img src={imgurl} className="mainImg"/>
                <p>Pulsa la imagen para reproducir el grito</p>
            </div>
            <div className="data-col">
                <h1>Información general</h1>
                <div className="data-subcont">
                    <div className="data-subcol">
                        <h2>Nombre</h2>
                        <p>{nombre}</p>
                        <h2>Categoría</h2>
                        <p>{cat}</p>
                        <h2>Región</h2>
                        <p>{reg}</p>
                    </div>
                    <div className="data-subcol">
                        <h2>Habilidades</h2>
                        <p>{hab1+" "+hab2}</p>
                        <h2>Habilidad oculta</h2>
                        <p>{hab3}</p>
                        <h2>Tipos</h2>
                    </div>

                </div>
            </div>
            <div className="des-col">
                <hr />
                <h2>{desc}</h2>
            </div>
        </>
    )
}