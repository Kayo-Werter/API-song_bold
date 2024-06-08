import { useState, useEffect } from 'react'
import api from '../../api'


import './ListagemCategorias.css'
import seta from './seta.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryList() {
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
    <div>
      <div>
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