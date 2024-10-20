import { useState, useEffect } from 'react';
import Square from '../Square.jsx';
import {URL} from "../consts";
import '../../css/home.css';
export default function Home (){
    const [pkm, setPkm] = useState([]);
    const [src,setSrc] = useState("");
    useEffect(()=>{
        fetch(`${URL.APIURL}getPkm.php?src=${src}`)
        .then(res => res.json())
        .then(data =>{
            setPkm(data);
        })
        .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
        });
        pkm.map(function(element){
            return(
                <Square 
                    key={element.pokemon_id}
                    index={element.pokemon_id}
                    id={element.pokemon_id}
                    name={element.pokemon_name}
                >
                </Square>
            )
        })
        let link = document.querySelector("link[rel~='icon']");
        link.href = `${URL.MAINURL}`;
    },[src])
    const srcHandler=()=>{
        var name = document.getElementById("name").value
        setSrc(name)
    }
    
    return(
        <>
            <div className='filtroContainer'>
                <input type="text" className='searchinput' id="name" onChange={srcHandler} placeholder='Buscar por nombre de Pokemon' />
            </div>
            {
            pkm.map(function(element){
                return(
                    <Square 
                        key={element.pokemon_id}
                        index={element.pokemon_id}
                        id={element.pokemon_id}
                        name={element.pokemon_name}
                    >
                    </Square>
                )
            })}
            {/* {pkm.length == 0 } */}
        </>
    )
}