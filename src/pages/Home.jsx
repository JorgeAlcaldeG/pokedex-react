import { useState, useEffect } from 'react';
import Square from '../Square.jsx';
import SinRes from '../SinRes.jsx';
import {URL} from "../consts";
import '../../css/home.css';
export default function Home (){
    const [pkm, setPkm] = useState([]);
    const [src,setSrc] = useState("");
    const [rows, setRows] = useState(5);
    useEffect(()=>{
        let link = document.querySelector("link[rel~='icon']");
        link.href = `${URL.MAINURL}`;
    },[])
    useEffect(()=>{
        fetch(`${URL.APIURL}getPkm.php?src=${src}`)
        .then(res => res.json())
        .then(data =>{
            setPkm(data);
        })
        .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
        });
    },[src, rows])
    const srcHandler=()=>{
        var name = document.getElementById("name").value
        setSrc(name)
    }
    const rowHandler=()=>{
        var value = document.getElementById("numRows").value;
        console.log(value)
        setRows(value) 
    }

    return(
        <>
            <div className='filtroContainer'>
                <input type="text" className='searchinput' id="name" onChange={srcHandler} placeholder='Buscar por nombre de Pokemon' />
            </div>
            <div className='rowsContainer'>
                <p>Número de pokemons por fila</p>
                <select name="numRows" id="numRows" onChange={rowHandler} defaultValue={rows}>
                    
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            {
            pkm.map(function(element){
                return(
                    <Square 
                        key={element.pokemon_id}
                        index={element.pokemon_id}
                        id={element.pokemon_id}
                        name={element.pokemon_name}
                        row={rows}
                    >
                    </Square>
                )
            })}
            {
                pkm.length == 0 ? <SinRes /> : ""
            }
        </>
    )
}