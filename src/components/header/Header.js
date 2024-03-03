import { useState, useEffect, useContext } from 'react';

import DropdownMenu from './dropdownMenu/DropdownMenu';
import Accordion from './accordion/Accordion';
import ShopBtn from '../ui/ShopBtn';
import shopContext from './context';

import './header.scss';

import logo from '../../assets/logo.svg';
import phoneOutlined from '../../assets/icons/phone-outline.svg';
import shopingCart from '../../assets/icons/shoping-cart.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import viberLogo from '../../assets/icons/viber.svg';
import phoneLogo from '../../assets/icons/phone.svg';
import searchIcon from '../../assets/icons/search.svg';
import closeIcon from '../../assets/icons//close.svg';

const Header = () => {
    const shopPosition = useContext(shopContext);

    const [menuOpen, setMenuOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const [changeTopPos, setChangeTopPos] = useState(false);
    const [toggleInfo, setToggleInfo] = useState(false);

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const handleScroll = () => {
        window.scrollY > 0 ? setChangeTopPos(true) : setChangeTopPos(false);
        (window.scrollY) > shopPosition.position ? setToggleInfo(true) : setToggleInfo(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        console.log(shopPosition.position)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [shopPosition.position]);

    let clazzBurger = "menu__icon icon-menu";
    let clazzMenu = "menu__body menu__body--mobile";
    let clazzHeader = "header";

    if (menuOpen) {
        clazzBurger += " menu-open";
        clazzMenu += " body-open";
    }

    if (changeTopPos) {
        clazzHeader += ' header--scrolled';
    }

    if (toggleInfo) {
        clazzHeader += ' header--info';
    }
    return (
        <header className={clazzHeader}>
            <div className="header__container header__container--desktop">
                <a href="#" className="header__logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className="header__menu menu menu--desktop">
                    <nav className='menu__body menu__body--desktop'>
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
                            <div className="menu__dropdown">
                                <button className="menu__dropBtn">Каталог</button>
                                <DropdownMenu />
                            </div>
                            <li className="menu__item"><a href="#" className="menu__link">Доставка и оплата</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">О нас</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">Контакты</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__info info-menu">
                    <div className="menu__search">
                        <img className='menu__search--open' src={searchIcon} alt="search icon" />
                        <input
                            style={focused ? { 'width': '100%' } : { 'width': '100px' }}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            type='text'
                            className="menu__search"
                            placeholder='Поиск' />
                        <img className='menu__search--close' src={closeIcon} alt="close icon" />
                    </div>
                    <div className="info-menu__content">
                        <a
                            style={focused ? { 'display': 'none' } : { 'display': 'flex' }}
                            href="tel:375291136969"
                            className="info-menu__call">
                            <img src={phoneOutlined} alt="phone Icon" />
                            <span>+375 (29) 113-69-69</span>
                        </a>
                        <button className="info-menu__shop">
                            <img src={shopingCart} className="info-menu__shop-icon" alt='shopinng-cart logo' />
                            <span className="info-menu__shop-buy">5</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="header__container header__container--mobile">
                <button onClick={() => setMenuOpen(!menuOpen)}
                    type="button" className={clazzBurger}
                    style={menuOpen ? { "opacity": "0", "visibility": "none" } : { "opacity": "1", "visibility": "visible" }}><span></span></button>
                <div className="header__menu menu menu--mobile">
                    <h2 className='header__menu-title'>Lower<br />Flower</h2>
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
                        <div className="menu__search">
                            <img className='menu__search--open' src={searchIcon} alt="search icon" />
                            <input style={focused ? { 'width': '100%' } : { 'width': '100px' }} onFocus={onFocus} onBlur={onBlur} type='text' className="menu__search" placeholder='Поиск' />
                            <img className='menu__search--close' src={closeIcon} alt="close icon" />
                        </div>
                        <ul className="menu__list">
                            <li className="menu__item"><a href="#" className="menu__link">Главная</a></li>
                            <div className="menu__accordion">
                                <Accordion />
                            </div>
                            <li className="menu__item"><a href="#" className="menu__link">Доставка и оплата</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">О нас</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">Контакты</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">FAQ</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">для корпоративных клиентов</a></li>
                        </ul>
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
                <div className="header__shop">
                    <ShopBtn type={"header"} />
                </div>
            </div>
        </header>
    )
}

export default Header;