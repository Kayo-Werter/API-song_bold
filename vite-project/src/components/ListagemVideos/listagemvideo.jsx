import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom'

import api from '../../api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './listagemvideos.css'


function MyPlayer() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        api.get(`/v1/video`)
            .then(response => {
                console.log('Dados da API:', response.data);
                setVideos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar vídeos:', error);
            });
    }, []);

    return (
        <div className='organizar_videos'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {videos.map((video, index) => {
                    // Verificar se as propriedades existem e são do tipo correto
                    if (typeof video.id !== 'number' && typeof video.id !== 'string') {
                        console.error(`ID inválido para o vídeo no índice ${index}:`, video.id);
                        return null;
                    }
                    if (typeof video.url !== 'string') {
                        console.error(`URL inválida para o vídeo no índice ${index}:`, video.url);
                        return null;
                    }
                    if (typeof video.title !== 'string') {
                        console.error(`Título inválido para o vídeo no índice ${index}:`, video.title);
                        return null;
                    }

                    let categoryName = '';
                    if (typeof video.category === 'object' && video.category !== null) {
                        categoryName = video.category.name || 'Categoria Desconhecida';
                    } else if (typeof video.category === 'string') {
                        categoryName = video.category;
                    } else {
                        console.error(`Categoria inválida para o vídeo no índice ${index}:`, video.category);
                        return null;
                    }
                    if (typeof video.release_date !== 'string') {
                        console.error(`Data de lançamento inválida para o vídeo no índice ${index}:`, video.release_date);
                        return null;
                    }

                    return (
                        <div key={video.id} className="col">
                            <div className="col-sm-8">
                                <div className='video_principal_settings'>
                                    <ReactPlayer controls={true} url={video.url}  />
                                </div>
                                <div className='descricao_principal'>
                                    <Link to={`/video/${video.id}/`} className="produto-link">
                                    <span>{video.title}</span>
                                    </Link>
                                </div>
                                <div className='descricao_principal'>
                                    <button className="btn__perfil" style={{ width: '30px', height: '30px' }}>
                                        <img src="" alt="" />
                                    </button>
                                    <span>{categoryName}</span><br></br>
                                    <span>{video.release_date}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MyPlayer;