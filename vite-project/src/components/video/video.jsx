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
            <div className='col-md-8 '>
                <div className='container-xxl'>
                    <img src={tumb} alt="tumb do video" />
                </div>
                <div>
                    <h3>Como fazer sua Tumbr profissional</h3>
                </div>
                <div>
                    <button className='btn__perfil'></button>
                    <span>TumbrsBRgb </span>
                    <span>há 3dias</span>
                </div>
            </div>
            <div className='col-6 col-md-4'>
                <div className='container'>
                    
                    <div className='row justify-content-center'>
                        <div className='col-6 col-md-4'>
                            <div>
                                <div className='video'>
                                    <img className='info_video_tumb' src={tumb} alt="" />
                                    <div className='info_video'>
                                        <div className='info_video_descricao'>
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
            </div>
        </div>

    )
}

export default Video