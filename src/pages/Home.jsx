import { useState, useEffect } from 'react';
import Square from '../Square.jsx';
import {URL} from "../consts";
export default function Home (){
    const [pkm, setPkm] = useState([]);
    useEffect(()=>{
        fetch(`${URL.APIURL}getPkm.php`)
        .then(res => res.json())
        .then(data =>{
            setPkm(data);
        })
        .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
        });
        let link = document.querySelector("link[rel~='icon']");
        link.href = `${URL.MAINURL}`;
    },[])
    return(
        <>
            {pkm.map(function(element){
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
        </>
    )
}