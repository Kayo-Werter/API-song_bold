import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';

import api from '../../api'

import Navbar from '../navbar/navbar';
import VideosMenores from '../VideosMenores/VideosMenores';
import MenuLateral from '../MenuLateral/menulateral';

import './video.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function Video() {

    const { videoId } = useParams()
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [category, setcategory] = useState('')
    const [release_date, setReleaseDate] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {
        // Carrega os detalhes do produto
        api.get(`/v1/video/${videoId}/`)
          .then(response => {
            setTitle(response.data.title)
            setUrl(response.data.url)
            setcategory(response.data.category)
            setReleaseDate(response.data.release_date)
            setDescription(response.data.description)
          })
          .catch(error => {
            console.error('Erro ao buscar detalhes do produto:', error)
          })
      }, [videoId])

    return (
        <div>
            <div>
                <Navbar />
                <MenuLateral />
            </div>
            
            <div className="conteiner text-center cor">
                <div className="row">
                    <div className="col">
                        <div className="col-sm-8">
                            <div className='v_2 video-container_maiores'>
                                <ReactPlayer controls={true} url={url} />
                            </div>
                            <div className='descricao_principal'>
                                <h3 to={`/video/${videoId}/`} className="produto-link">
                                    <span>{title}</span>
                                </h3>
                            </div>
                            <div className='descricao_principal'>
                                <h4 className='m'>{category.name}</h4><br></br>
                                <h5>{release_date}</h5>
                                <span>{description}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <VideosMenores />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Video