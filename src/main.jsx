import React  from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import '../css/main.css';
createRoot(document.getElementById('app')).render(
    <>
        <img className="marco" src="../resources/interfaz/Marco1.png" alt="fondo" />
        <App />
    </>
)
