import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/navbar.css';
import logo from '../../assets/logo.png';
import pesquisar from '../../assets/pesquisar.png';

const Navbar = () => {
    return (
        <nav className='navbar navbar-light bg-dark'>
            <div className='container'>
                <a className='navbar-brand' href="/inicio">
                    <img src={logo} alt="logo" className='logo' />
                </a>
                <div className='input_pesquisar'>
                    <input type="search" name="pesquisar" className='Pesquisar' placeholder="Pesquisar" aria-label="pesquisar"
                        aria-describedby="basic-addon1" />
                    <button type='submit' className='btn__pesquisar'><img src={pesquisar} alt="icn busca" width={20} height={20} /></button>
                </div>
                <div>
                    <button className='btn__perfil'><img src="" alt="" /></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;