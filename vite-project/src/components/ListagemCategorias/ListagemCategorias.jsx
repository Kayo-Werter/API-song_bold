// Importa os hooks useState e useEffect do React para gerenciar o estado e efeitos colaterais, respectivamente,
// e o módulo api para fazer solicitações HTTP.
import { useState, useEffect } from 'react'
import api from '../../api'


// Importa o arquivo de estilo CSS.
import './ListagemCategorias.css'
import seta from './seta.png';
// import Navbar from '../navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryList() {
  // Define o estado categorias com useState, inicializado como um array vazio
    const [categories, setCategories] = useState([])

  // Efeito useEffect que é executado após a renderização inicial do componente
  useEffect(() => {
    // Faz uma solicitação GET para a API para obter a lista de categorias
    api.get(`/v1/category`)
      .then(response => {
        // Atualiza o estado dos categorias com os dados recebidos da API
        setCategories(response.data)
      })
      .catch(error => {
        // Registra qualquer erro ocorrido ao buscar os categorias
        console.error('Erro ao buscar categorias:', error)
      })
  }, [])
  return (
    <div>
      <div className="p-5 mb-2 bg-box">
        <section className='superior__secao__container'>
            <div className='superior__secao__container-wrapper'>
                {categories.map((category) => 
                    <a href="#" className='superior__item' key={category.id}>{category.name}</a>
                )}
                <label className="superior__slider">
                    <span><img src={seta} alt="flecha direção"/></span>
                </label>
            </div>
        </section>
      </div>
    </div>
  )
}

export default CategoryList