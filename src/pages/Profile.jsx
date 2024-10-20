import { useParams } from 'react-router';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import {URL} from "../consts.js";
export default function Profile (){
    console.log(useLocation())
    const id = useParams();
    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        link.href = `${URL.FAVURL}${id.pkmid}.png`;
      }, []);
    return(
        <>
            <h1>Profile {id.pkmid}</h1>
            <Link to={`/`}>VOLVER</Link>
        </>
    )
}