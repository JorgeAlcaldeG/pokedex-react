import { useState } from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import '../css/app.css';
// import '../css/main.css';
function App() {
    const [marco, setmarco] = useState("marco1");
    
    if(marco == "marco1"){
        var marcoClass = 'marco marco1'
    }else{
        var marcoClass = 'marco marco2'
    }
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/profile/:pkmid",
            element: <Profile />,
          },
      ]);
        const handleClick = (skin) =>{
            var form = '<div class="skinOptContainer"> <label class="optlabel"><input type="radio" id="marco1" name="skin" value="marco1" class="framechk"><img class="frameconfimg" src="./resources/interfaz/Marco1.png" alt="Option 1"></label><label class="optlabel"><input type="radio" id="marco2" name="skin" value="marco2" class="framechk"><img class="frameconfimg" src="./resources/interfaz/Marco2.png" alt="Option 2"></label></div>'
            Swal.fire({
                title: "Cambio de skin",
                html: form,
                confirmButtonText:"Guardar",
                background: 'rgba(255, 255, 255, 0.85)',
                confirmButtonColor: "#DD6B55",
                width: '50%'
            }).then((result)=>{
                if (result.isConfirmed) {
                    setmarco(document.querySelector('input[name="skin"]:checked').value)
                }
            });
            document.getElementById(marco).checked = true;
        }
      return (
        <>
            <img className={marcoClass} alt="fondo" />
            <div className="appContainer">
                <img src="../../resources/interfaz/configBtn.png" className="configBtn" onClick={()=>{handleClick(marco)}} />
                <RouterProvider router={router} />
            </div>
        </>
    )
}
export default App