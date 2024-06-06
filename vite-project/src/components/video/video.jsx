import './video.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/navbar';
import tumb from './transferir.jpeg';


function Video() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container text-center">
                <div className="row">
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
                    <div className="col-sm-4">
                        <div className="video">
                            <img className="info_video_tumb" src={tumb} alt="tumb" />
                            <div className="info_video">
                                <div className="info_video_descricao">
                                    <h6>Como fazer sua Tumbr profissional</h6>
                                    <h8>TumbrsBRgb </h8>
                                    <h8>há 3 dias</h8>
                                </div>
                            </div>
                        </div>

                        <div className="video">
                            <img className="info_video_tumb" src={tumb} alt="tumb" />
                            <div className="info_video">
                                <div className="info_video_descricao">
                                    <span>Como fazer sua Tumbr profissional</span>
                                    <span>TumbrsBRgb </span>
                                    <span>há 3 dias</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Video