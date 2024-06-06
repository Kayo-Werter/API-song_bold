
import '../styles/inicio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar/navbar';
import MenuLateral from '../components/MenuLateral/menulateral';
import MyPlayer from '../components/ListagemVideos/listagemvideo';
import ListagemCategorias from '../components/ListagemCategorias/ListagemCategorias';
// import ReactPlayer from 'react-player/youtube';

function Inicio() {

    return (
        <div>
            <Navbar />
            <div>
                <MenuLateral />
                <ListagemCategorias />
                <MyPlayer />
            </div>
        </div>

    )
}

export default Inicio