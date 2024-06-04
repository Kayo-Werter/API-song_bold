import React from 'react'
// import { useNavigate } from 'react-router-dom'

// import api from '../api'
import '../styles/inicio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar/navbar';
import MenuLateral from '../components/MenuLateral/menulateral';


function Inicio() {
    return (
        <div>
            <Navbar/>
            <MenuLateral/>
        </div>
    )
}

export default Inicio
