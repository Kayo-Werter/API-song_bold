import { useState } from 'react'

import '../styles/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className='fundo'>
        <div className='retangulo'>
            <h1>Login</h1>
            <form action="">
              <label className='input__email font__login'>Email:</label>
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