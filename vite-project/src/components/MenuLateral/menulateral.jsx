import './menulateral.css'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const MenuLateral = () => {
    return (
        <div className="lobbi">
            <div className="menu_lateral">
                <a href="#">
                    <CIcon icon={icon.cilHome} style={{ width:'28px', color:'#9D20FF'}} />
                    <span>Inicio</span>
                </a>
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
                    <span>youtube studio</span>
                </a>
            </div>
        </div>
    );
};

export default MenuLateral;
