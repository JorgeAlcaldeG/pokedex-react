import { useParams } from 'react-router';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {URL} from "../consts.js";
export default function Profile (){
    const id = useParams();
    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        link.href = `${URL.FAVURL}${id.pkmid}.png`;
        console.log(`${URL.APIURL}getPkm.php?id=${id}`)
        fetch(`${URL.APIURL}getPkm.php?id=${id.pkmid}`)
        .then(res => res.json())
        .then(data =>{
            if(typeof data["status"] == 'undefined'){
                console.log(data)
            }else{
                console.log(data["detail"])
            }
        })
        .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
        });
      }, []);
    return(
        <>
            <h1>Profile {id.pkmid}</h1>
            <Link to={`/`}>VOLVER</Link>
        </>
    )
}