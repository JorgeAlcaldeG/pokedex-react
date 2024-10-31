import React from "react";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Profileslider.css";
import { useParams } from 'react-router';
import MainData from "./MainData.jsx";
import {URL} from "./consts.js";
import SubData from "./subData.jsx";
export default function Profileslider() {
    const [data, setdata] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const id = useParams();
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // appendDots: dots => (
      //   <div
      //     style={{
      //       borderRadius: "10px",
      //       padding: "10px"
      //     }}
      //   >
      //     <ul style={{ margin: "0px" }}> {dots} </ul>
      //   </div>
      // ),
    };
    useEffect(() => {
      fetch(`${URL.APIURL}getPkm.php?id=${id.pkmid}`)
      .then(res => res.json())
      .then(data =>{
          if(typeof data["status"] == 'undefined'){
              setdata(data);
              setIsLoading(false);
          }else{
              // console.log(data["detail"])
              setIsLoading(false);
          }
      })
      .catch(function (error) {
          console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
    }, []);

    if (isLoading) {
    return <div>Loading...</div>;
    }

    return (
        <Slider {...settings}>
          <div>
            <div className="slide">
              <MainData 
                desc={data.desc}
                nombre ={data.nombre}
                cat={data.categoria}
                reg={data.region}
                hab1={data.hab1}
                hab2={data.hab2}
                hab3={data.hab3}
                type1={data.tipo1}
                type2={data.tipo2}
              />
            </div>
          </div>
          <div>
            <div className="slide">
              <SubData 
                ps={data.ps}
                atk={data.atk}
                spatk={data.spa}
                def={data.def}
                sdef={data.spd}
                spd={data.spe}
              />
            </div>
          </div>
          <div>
            <div className="slide">
              <h3>3</h3>
            </div>
          </div>
        </Slider>
    );
  }