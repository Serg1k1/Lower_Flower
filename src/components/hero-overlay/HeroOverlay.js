import './heroOvarlay.scss'

import instagramLogo from '../../assets/icons/instagram.svg';
import viberLogo from '../../assets/icons/viber.svg';
import phoneLogo from '../../assets/icons/phone.svg';
import phoneOutlined from '../../assets/icons/phone-outline.svg';
import shopingCart from '../../assets/icons/shoping-cart.svg';

const HeroOverlay = () => {
    return (
        <div className="overlay">
            <div className="overlay__contacts contacts-overlay">
                <div className="contacts-overlay__item">
                    <a href="mailto:zakaz@loverflower.by" className="contacts-overlay__title">zakaz@loverflower.by</a>
                    <p className="contacts-overlay__text">Доставка 24/7 по договоренности с оператором</p>
                </div>
                <div className="contacts-overlay__item">
                    <a href="#" className="contacts-overlay__title">ул. Тимирязева 67</a>
                    <p className="contacts-overlay__text">10:00 до 21:00<br />без выходных</p>
                </div>
            </div>
            <div className="overlay__icons">
                <a href="#" className="overlay__icon">
                    <img src={instagramLogo} alt="logo" />
                </a>
                <a href="#" className="overlay__icon">
                    <img src={viberLogo} alt="logo" />
                </a>
                <a href="#" className="overlay__icon">
                    <img src={phoneLogo} alt="logo" />
                </a>
            </div>
            <div className="overlay__details details-overlay">
                <a href="tel:375291136969" className="details-overlay__phone">+375 (29) 113-69-69</a>
                <button className="details-overlay__button">
                    <img src={phoneOutlined} alt="phone" />
                    <span>заказать звонок</span>
                </button>
                <button className="details-overlay__shop">
                    <img src={shopingCart} className="details-overlay__shop-icon" alt='shopinng-cart logo' />
                    <span className="details-overlay__shop-buy">5</span>
                </button>
            </div>
        </div>
    )
}

export default HeroOverlay;