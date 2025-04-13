import React from "react";
import { useParams } from 'react-router';
import {URL} from "./consts.js";
import '../css/MainData.css';
export default function MainData( {nombre, cat, reg, desc, hab1, hab2, hab3, type1, type2} ){
    const id = useParams();
    const imgurl = URL.IMGURL+id.pkmid+".png";
    var hideType2;
    hab2 === null ? hab2='': hab2 =` - ${hab2}`;
    hab3 === null ? hab3='':'';
    type2 === null ? hideType2='hideType typeImg': hideType2='typeImg';
    // id.pkmid
    return(
        <>
            <div className="img-col">
                <img src={imgurl} className="mainImg"/>
                {/* <p className="subtext">Pulsa la imagen para reproducir el grito</p> */}
            </div>
            <div className="data-col">
                <h1>Información general</h1>
                <div className="data-subcont">
                    <div className="data-subcol">
                        <h2 className="subtitulo">Nombre</h2>
                        <p>{nombre}</p>
                        <h2 className="subtitulo">Categoría</h2>
                        <p>{cat}</p>
                        <h2 className="subtitulo">Región</h2>
                        <p>{reg}</p>
                    </div>
                    <div className="data-subcol">
                        <h2 className="subtitulo">Habilidades</h2>
                        <p>{hab1+" "+hab2}</p>
                        <h2 className="subtitulo">Habilidad oculta</h2>
                        <p>{hab3}</p>
                        <h2 className="subtitulo">Tipos</h2>
                        <div className="typeContainer">
                            <img src={`${URL.TYPEURL}${type1}.png`} alt="tipo1" className="typeImg" />
                            <img src={`${URL.TYPEURL}${type2}.png`} alt="tipo2" className={hideType2} />
                        </div>
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