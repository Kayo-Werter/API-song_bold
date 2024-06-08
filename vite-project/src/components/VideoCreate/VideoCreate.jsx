// Importa os hooks useState, useEffect, useNavigate e useParams do React para gerenciar estado, efeitos colaterais, navegação e parâmetros da URL
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

// Importa o axios para fazer solicitações HTTP
import api from '../../api'

// Importa o arquivo de estilo CSS.
import './videocreate.css'

// Define o componente ProdutoEdit como uma função
function CreateVideo() {
    // Obtém o parâmetro videoId da URL
    const { videoId } = useParams()

    // Utiliza o hook useNavigate para navegar entre rotas
    const navigate = useNavigate()

    // Define estados para o title, url, category, descrição e preço do produto
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [category, setcategory] = useState('')
    const [release_date, setReleaseDate] = useState('')
    const [description, setDescription] = useState('')

    // Efeito useEffect que é executado sempre que o videoId é alterado
    useEffect(() => {
        if (!videoId) return

        api.get(`/v1/video/${videoId}/`)
            .then(response => {
                // Atualiza os estados com os detalhes do produto recebidos da API
                setTitle(response.data.title)
                setUrl(response.data.url)
                setcategory(response.data.category)
                setReleaseDate(response.data.release_date)
                setDescription(response.data.description)
            })
            .catch(error => {
                // Registra qualquer erro ocorrido ao buscar os detalhes do produto
                console.error('Erro ao buscar detalhes do produto:', error)
            })
    }, [videoId])

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('url', url);
            formData.append('category', category);
            formData.append('release_date', release_date);
            formData.append('description', description);

            // Log dos dados do formulário
            console.log('Dados do Formulário:', {
                title,
                url,
                category,
                release_date,
                description
            });

            if (videoId) {
                await api.put(`/v1/video/${videoId}/`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                alert('Video atualizado com sucesso!');
            } else {
                await api.post(`/v1/video/`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            navigate('/videos-cadastrados');
        } catch (error) {
            console.error('Erro ao salvar produto:', error);
        }
    };

    const [categories, setCategories] = useState([])
    useEffect(() => {
        api.get(`/v1/category`)
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar categorias:', error)
            })
    }, [])

    return (
        <div className="edit-produto-container">
            <div className='container'>
                {/* Título dinâmico com base na existência do produtoId */}
                <h1 className='title'>{videoId ? 'Editar Produto' : 'Criar Novo Produto'}</h1>

                <form onSubmit={handleSubmit}>
                    {/* Inputs para o nome, quantidade, tamanho, descricao e preço do produto */}
                    <div className='row'>
                    
                        <input className="form-control col forms_inputs" type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input className="form-control col forms_inputs" type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                        <div className='row'>
                            <select className='form-select col forms_inputs' value={category} onChange={(e) => setcategory(e.target.value)}>
                                <option value={category.name}>Selecione uma Categoria</option>
                                {categories.map((category) =>
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                )}
                            </select>
                            <input className="form-control col forms_inputs" type="date" step="0.01" placeholder="data" value={release_date} onChange={(e) => setReleaseDate(e.target.value)} />
                        </div>
                        <textarea className="form-control" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className='btn_create'>
                        <button className="add_video" type="submit">{videoId ? 'Salvar' : 'Adicionar'}</button>

                        <Link to="/videos-cadastrados" >
                            <button type="button" className="add_video">Voltar para Listagem</button>
                        </Link>

                    </div>
                </form>
            </div>
        </div>

    )
}

export default CreateVideo
