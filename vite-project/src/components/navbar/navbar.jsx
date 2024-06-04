import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/inicio">Inicio</Link></li>
                {/* Adicione outros links conforme necessário */}
            </ul>
        </nav>
    );
};

export default Navbar;