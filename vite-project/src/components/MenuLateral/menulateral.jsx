import './menulateral.css'
import vinyl from './vinyl.png';
import './menulateral.css'

const MenuLateral = () => {
    return (
        <div className="lobbi">
            <div className="menu_lateral">
                <a href="#">
                    <img src={ vinyl } alt="" style={{ width: '40px'}}/>
                    <span>Inicio</span>
                </a>
                <a href="#">
                    <img src={ vinyl }  alt="" style={{ width: '40px'}}/>
                    <span>inscrições</span>
                </a>
                <a href="#">
                    <img src={ vinyl } alt="" style={{ width: '40px'}}/>
                    <span>seu canal</span>
                </a>
                <a href="#">
                    <img src={ vinyl } alt="" style={{ width: '40px'}}/>
                    <span>youtube studio</span>
                </a>
            </div>
        </div>
    );
};

export default MenuLateral;
