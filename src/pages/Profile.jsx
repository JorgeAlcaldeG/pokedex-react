import { Link } from "react-router-dom";
import {URL} from "../consts.js";
import Profileslider from "../Profileslider.jsx"
import { useParams } from 'react-router';
import { useEffect } from 'react';
export default function Profile (){
    const id = useParams();
    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        link.href = `${URL.FAVURL}${id.pkmid}.png`;
      }, []);

    return(
        <>
            {/* {console.log(data)}
            <h1>Profile {data.nombre}</h1>
            <Link to={`/`}>VOLVER</Link> */}
            <Profileslider />
        </>
    )
}