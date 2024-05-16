import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../api'
import '../styles/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  // Função para lidar com o envio do formulário de login
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Faz uma solicitação POST para a API para obter o token de acesso
      const response = await api.post(`/token/`, { username, password })
      // Armazena o token de acesso no localStorage
      localStorage.setItem('token', response.data.access)
      // Redireciona para a página de listagem de posts após o login bem-sucedido
      navigate('/inicio/')
    } catch (error) {
      // Registra qualquer erro ocorrido ao fazer login
      console.error('Erro ao fazer login:', error)
    }
  }

  return (
    <div className='fundo'>
        <div className='retangulo'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <label className='input__email font__login'>Username:</label>
              <input className='input__email' type="text" placeholder="Digite seu E-mail" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label className='input__senha font__login'>Senha:</label>
              <input className='input__senha' type="password" placeholder="Digite sua Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
              <a className='esqueceu__senha' href="">Esqueceu a senha?</a>
              <button className='botao__login' type="submit">Acessar</button>
            </form>
        </div>
    </div>
  )
}

export default Login