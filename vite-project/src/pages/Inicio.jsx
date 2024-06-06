// import { useNavigate } from 'react-router-dom'

// import api from '../api'
import '../styles/inicio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar/navbar';
import MenuLateral from '../components/MenuLateral/menulateral';
import ListagemCategorias from '../components/ListagemCategorias/ListagemCategorias';
import tumb from '../components/video/transferir.jpeg';

function Inicio() {
    return (
        <div>
            <Navbar />
            <div>
                <MenuLateral />
                <ListagemCategorias />
                <div className='organizar_videos'>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div className="col">
                            <div className="col-sm-8">
                                <div className='video_principal_settings'>
                                    <img className='video_principal' src={tumb} alt="" />
                                </div>
                                <div className='descricao_principal'>
                                    <span >
                                        Como fazer sua Tumbr profissional</span>
                                </div>
                                <div className='descricao_principal'>
                                    <button className="btn__perfil" style={{ width: '30px', height: '30px' }}><img src="" alt="" /></button>
                                    <span>TumbrsBRgb </span>
                                    <span>há 3dias</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-sm-8">
                                <div className='video_principal_settings'>
                                    <img className='video_principal' src={tumb} alt="" />
                                </div>
                                <div className='descricao_principal'>
                                    <span >
                                        Como fazer sua Tumbr profissional</span>
                                </div>
                                <div className='descricao_principal'>
                                    <button className="btn__perfil" style={{ width: '30px', height: '30px' }}><img src="" alt="" /></button>
                                    <span>TumbrsBRgb </span>
                                    <span>há 3dias</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-sm-8">
                                <div className='video_principal_settings'>
                                    <img className='video_principal' src={tumb} alt="" />
                                </div>
                                <div className='descricao_principal'>
                                    <span >
                                        Como fazer sua Tumbr profissional</span>
                                </div>
                                <div className='descricao_principal'>
                                    <button className="btn__perfil" style={{ width: '30px', height: '30px' }}><img src="" alt="" /></button>
                                    <span>TumbrsBRgb </span>
                                    <span>há 3dias</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-sm-8">
                                <div className='video_principal_settings'>
                                    <img className='video_principal' src={tumb} alt="" />
                                </div>
                                <div className='descricao_principal'>
                                    <span >
                                        Como fazer sua Tumbr profissional</span>
                                </div>
                                <div className='descricao_principal'>
                                    <button className="btn__perfil" style={{ width: '30px', height: '30px' }}><img src="" alt="" /></button>
                                    <span>TumbrsBRgb </span>
                                    <span>há 3dias</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-sm-8">
                                <div className='video_principal_settings'>
                                    <img className='video_principal' src={tumb} alt="" />
                                </div>
                                <div className='descricao_principal'>
                                    <span >
                                        Como fazer sua Tumbr profissional</span>
                                </div>
                                <div className='descricao_principal'>
                                    <button className="btn__perfil" style={{ width: '30px', height: '30px' }}><img src="" alt="" /></button>
                                    <span>TumbrsBRgb </span>
                                    <span>há 3dias</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Inicio