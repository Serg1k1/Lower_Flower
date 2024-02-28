import './footer.scss';

import FooterAccordion from '../footer/footer-accordion/FooterAccordion';

import logo from '../../assets/logo.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import viberLogo from '../../assets/icons/viber.svg';
import phoneLogo from '../../assets/icons/phone.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__details">
                    <a href="#" className="footer__logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="footer__data">
                        <h4 className="footer__title">реквизиты</h4>
                        <div className="footer__text">
                            <p>
                                ООО «Ловефлове» 220035, Республика Беларусь,
                                г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11)
                                УНП 193263781, р/с BY55MTBK30120001093300096372 ЗАО «МТБанк»,
                                БИК MTBKBY22 220007, г. Минск, улица Толстого
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer__catalog">
                    <FooterAccordion title={'Каталог'} />
                </div>
                <div className="footer__catalog">
                    <FooterAccordion title={'Букет'} />
                </div>
                <nav className="footer__menu menu-footer">
                    <ul className="menu-footer__list">
                        <li className="menu-footer__item"><a href="#" className="menu-footer__link footer__title">Доставка и оплата </a></li>
                        <li className="menu-footer__item"><a href="#" className="menu-footer__link footer__title">О нас</a></li>
                        <li className="menu-footer__item"><a href="#" className="menu-footer__link footer__title">FAQ</a></li>
                        <li className="menu-footer__item"><a href="#" className="menu-footer__link footer__title">Контакты</a></li>
                        <li className="menu-footer__item"><a href="#" className="menu-footer__link footer__title">для корпоративных клиентов</a></li>
                    </ul>
                </nav>
                <div className="footer__info info-footer">
                    <div className="info-footer__address">
                        <div className="info-footer__item">
                            <a href="mailto:zakaz@loverflower.by" className="info-footer__link">zakaz@loverflower.by</a>
                            <div className="info-footer__text">Доставка 24/7 по договоренности с оператором</div>
                        </div>
                        <div className="info-footer__item">
                            <h4 className="info-footer__link">ул. Тимирязева 67</h4>
                            <div className="info-footer__text">10:00 до 21:00 <br /> без выходных</div>
                        </div>
                    </div>
                    <div className="info-footer__contacts">
                        <div className="info-footer__phone">
                            <a className='info-footer__link' href="tel:+375291136969">+375 (29) 113-69-69</a>
                            <p className="info-footer__text">прием звонков круглосуточно</p>
                        </div>
                        <div className="info-footer__icons">
                            <a href="#" className="info-footer__icon"><img src={instagramLogo} alt="Logo" /></a>
                            <a href="#" className="info-footer__icon"><img src={viberLogo} alt="Logo" /></a>
                            <a href="#" className="info-footer__icon"><img src={phoneLogo} alt="Logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;