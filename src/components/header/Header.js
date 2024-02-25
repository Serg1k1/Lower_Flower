import './header.scss';

import logo from '../../assets/logo.svg';
import phoneOutlined from '../../assets/icons/phone-outline.svg';
import shopingCart from '../../assets/icons/shoping-cart.svg';
const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo" className="header__logo" />
                <div class="header__menu menu">
                    <button type="button" class="menu__icon icon-menu--closed"><span></span></button>
                    <nav class="menu__body">
                        <div className="menu__header">
                            <img src={logo} alt="logo" className="menu__logo" />
                            <button type="button" class="menu__icon icon-menu icon-menu--opened"><span></span></button>
                        </div>
                        <ul class="menu__list">
                            <li class="menu__item"><a href="#" class="menu__link">Каталог</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Доставка и оплата</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">О нас</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Контакты</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">FAQ</a></li>
                        </ul>
                        <button className="menu__search">поиск</button>
                    </nav>
                </div>
                <div className="header__info info-menu">
                    <a href="tel:375291136969" className="info-menu__call">
                        <img src={phoneOutlined} alt="phone Icon" />
                        <span>+375 (29) 113-69-69</span>
                    </a>
                    <button className="info-menu__shop">
                        <img src={shopingCart} className="info-menu__shop-icon" alt='shopinng-cart logo' />
                        <span className="info-menu__shop-buy">5</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;