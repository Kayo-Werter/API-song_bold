import logo from './logo.png';
import pesquisarIcon from './pesquisar.png';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" style={{ width: '100px', height: '50px' }}/>
                </a>
                <div className="d-flex align-items-center">
                    <input type="search" name="pesquisar" className="pesquisar" placeholder="Pesquisar"/>
                    <button type="submit" className="btn__pesquisar" >
                        <img src={pesquisarIcon} alt="Ícone de busca" style={{ width:'20px', height:'44px' }}/>
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