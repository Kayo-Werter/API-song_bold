// Importa os hooks useState e useEffect do React para gerenciar o estado e efeitos colaterais, respectivamente,
// e o módulo api para fazer solicitações HTTP.
import { useState, useEffect } from 'react'
import api from '../../api'

// Importa o componente Link do react-router-dom para navegação entre rotas.
import { Link } from 'react-router-dom'

// Importa o arquivo de estilo CSS.
import './VideosCadastrados.css'
import Navbar from '../navbar/navbar'
import MenuLateral from '../MenuLateral/menulateral'
import 'bootstrap/dist/css/bootstrap.min.css';

function VideosCadastrados() {
  const [videos, setVideos] = useState([]);

  // Função para lidar com a exclusão de um produto
  const handleDelete = async (videoId) => {
    try {
      // Faz uma solicitação DELETE para a API para excluir o produto com o ID fornecido
      await api.delete(`/v1/video/${videoId}/`)

      // Atualiza o estado dos produtos, removendo o produto excluído
      const updatedVideos = videos.filter(video => video.id !== videoId);
      setVideos(updatedVideos);
    } catch (error) {
      // Registra qualquer erro ocorrido durante a exclusão do produto
      console.error('Erro ao deletar produto:', error)
    }
  }

  useEffect(() => {
    api.get(`/v1/video`)
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar vídeos:', error);
      });
  }, []);
  // Retorna a interface do componente ProdutoList
  return (
    <div>
      <Navbar />
      <MenuLateral />
      <div className="header">

        <div className='listaProdutos'>
          <h1>Controle de Estoque</h1>
          <Link to="/video/create" className="add_video">+ Adicionar Video</Link>
        </div>
        <div className="p-3 mb-2 bg-box">
          <table className="table table-hover text-center table-secondary">
            <thead>
              <tr>
                <th className='table-dark' scope="col">Nome</th>
                <th className='table-dark' scope="col">Data</th>
                <th className='table-dark' scope="col">Opções</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video) => (
                <tr className='table-dark' key={video.id}>
                  <td className='truncate'>{video.title}</td>
                  <td>{video.release_date}</td>
                  <td >
                    <Link to={`/video/${video.id}`} className="video-link">Detalhes</Link>
                    <Link to={`/video/${video.id}/edit`} className="video-link">Editar</Link>
                    <button onClick={() => handleDelete(video.id)} className="btn btn-danger">Deletar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default VideosCadastrados