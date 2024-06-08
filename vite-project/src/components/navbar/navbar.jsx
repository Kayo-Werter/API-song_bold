import logo from './logo.png';
import pesquisarIcon from './pesquisar.png';
import './navbar.css'

const Navbar = () => {
    return (
        
        <nav className='navbar navbar-light bg-dark fixed-top'>
            <div className='container'>
                <a className='navbar-brand' href="/inicio">
                    <img src={logo} alt="logo" className='logo' />
                </a>
                <div className='input_pesquisar'>
                    <input type="search" name="pesquisar" className='Pesquisar' placeholder="Pesquisar"/>
                    <button type="submit" className="btn__pesquisar" >
                        <img src={pesquisarIcon} alt="Ícone de busca" style={{ width:'20px', height:'20px' }}/>
                    </button>
                    </div>
                <div>
                    <button className='btn__perfil'><img src="" alt="" /></button>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;