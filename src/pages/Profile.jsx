import { Link } from "react-router-dom";
import {URL} from "../consts.js";
import Profileslider from "../Profileslider.jsx"
import { useParams } from 'react-router';
import { useEffect } from 'react';
import "../../css/profile.css";
export default function Profile (){
    const id = useParams();
    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        link.href = `${URL.FAVURL}${id.pkmid}.png`;
        document.body.style.overflow = 'hidden';
      }, []);
    return(
        <>
            <Link to={`/`} className="backBtn"><div className="ButtonContainer"><img className="backIcon" src="../../resources/interfaz/backicon.png" alt="back" />Home</div></Link>
            {/* <div className="backBtn">Back</div> */}
            <Profileslider />
        </>
    )
}