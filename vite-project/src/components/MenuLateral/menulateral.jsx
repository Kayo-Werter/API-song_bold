import './menulateral.css'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { Link } from 'react-router-dom'

const MenuLateral = () => {
    return (
        <div className="lobbi">
            <div className="menu_lateral">
                <Link to={`/inicio`}>
                    <CIcon icon={icon.cilHome} style={{ width:'28px', color:'#9D20FF'}} />
                    <span>Inicio</span>
                </Link>
                <a href="#">
                    <CIcon icon={icon.cilChevronDoubleRight} style={{ width:'28px', color:'#9D20FF'}} />
                    <span>inscrições</span>
                </a>
                <a href="#">
                    <CIcon icon={icon.cilTv} style={{ width:'28px' , color:'#9D20FF'}} />
                    <span>seu canal</span>
                </a>
                <a href="#">
                    <CIcon icon={icon.cilEqualizer} style={{ width:'28px' , color:'#9D20FF'}} />
                    <span>Studio</span>
                </a>
                <Link to={`/videos-cadastrados`}>
                        <CIcon icon={icon.cilHome} style={{ width:'28px', color:'#9D20FF'}} />
                        <span>Adicionar</span>
                </Link>
            </div>
        </div>
    );
};

export default MenuLateral;
