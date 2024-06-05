// import { useNavigate } from 'react-router-dom'

// import api from '../api'
import '../styles/inicio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar/navbar';
import MenuLateral from '../components/MenuLateral/menulateral';
import ListagemCategorias from '../components/ListagemCategorias/ListagemCategorias';

function Inicio() {
    return (
        <div>
            <Navbar/>
            <MenuLateral/>
            <ListagemCategorias />
        </div>
    )
}

export default Inicio
