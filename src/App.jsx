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
            var form = '<p>Cambio de skin</p>  <label>marco1</label><input type="radio" id="marco1" name="skin" value="marco1"> <label>marco2</label><input type="radio" id="marco2" name="skin" value="marco2">'
            Swal.fire({
                html: form,
                confirmButtonText:"Guardar",
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