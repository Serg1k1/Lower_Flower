import { useState } from 'react';

import './header.scss';

import logo from '../../assets/logo.svg';
import phoneOutlined from '../../assets/icons/phone-outline.svg';
import shopingCart from '../../assets/icons/shoping-cart.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import viberLogo from '../../assets/icons/viber.svg';
import phoneLogo from '../../assets/icons/phone.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    let clazzBurger = "menu__icon icon-menu";
    let clazzMenu = "menu__body"

    if (menuOpen) {
        clazzBurger += " menu-open";
        clazzMenu += " body-open";
    }
    return (
        <header className="header">
            <div className="header__container">
                <a href="#" className="header__logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className="header__menu menu">
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        type="button" className={clazzBurger}
                        style={menuOpen ? { "display": "none" } : { "display": "block" }}><span></span></button>
                    <nav className={clazzMenu}>
                        <div className="menu__header">
                            <a href="#" className="menu__logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                type="button"
                                className={clazzBurger}
                            ><span></span></button>
                        </div>
                        <ul className="menu__list">
                            <li className="menu__item"><a href="#" className="menu__link">Каталог</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">Доставка и оплата</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">О нас</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">Контакты</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">FAQ</a></li>
                        </ul>
                        <button className="menu__search">поиск</button>
                        <div className="menu__footer footer-menu">
                            <div className="footer-menu__info">
                                <div className="footer-menu__info-item">
                                    <a href="mailto:zakaz@loverflower.by" className="footer-menu__info-link">zakaz@loverflower.by</a>
                                    <div className="footer-menu__info-text">Доставка 24/7 по договоренности с оператором</div>
                                </div>
                                <div className="footer-menu__info-item">
                                    <h4 className="footer-menu__info-link">ул. Тимирязева 67</h4>
                                    <div className="footer-menu__info-text">10:00 до 21:00 <br /> без выходных</div>
                                </div>
                            </div>
                            <div className="footer-menu__politics">
                                <a href="#" className="footer-menu__confidantial">Политика конфиденциальности</a>
                                <a href="#" className="footer-menu__confidantial">Обработка персональных данных</a>
                            </div>
                            <div className="footer-menu__contacts">
                                <div className="footer-menu__phone">
                                    <a href="tel:+375291136969">+375 (29) 113-69-69</a>
                                </div>
                                <div className="footer-menu__icons">
                                    <a href="#" className="footer-menu__icon"><img src={instagramLogo} alt="Logo" /></a>
                                    <a href="#" className="footer-menu__icon"><img src={viberLogo} alt="Logo" /></a>
                                    <a href="#" className="footer-menu__icon"><img src={phoneLogo} alt="Logo" /></a>
                                </div>
                            </div>
                        </div>
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