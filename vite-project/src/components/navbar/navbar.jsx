import logo from './assets/logo.png';
import pesquisarIcon from './assets/pesquisar.png';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" className="logo"/>
                </a>
                <div className="input_pesquisar">
                    <input type="search" name="pesquisar" className="pesquisar" placeholder="Pesquisar"/>
                    <button type="submit" className="btn__pesquisar" >
                        <img src={pesquisarIcon} alt="Ícone de busca" style={{ width:'20px', height:'20px' }}/>
                    </button>
                </div>
                <div>
                    <button className="btn__perfil"><img src="" alt=""/></button>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;