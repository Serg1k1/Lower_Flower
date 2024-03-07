import './catalogMainPage.scss';

import pinkDecor from '../../assets/catalogMainPage/pink-decor.svg';
import greenDecor from '../../assets/catalogMainPage/green-decor.svg';

const CatalogMainPage = () => {
    return (
        <section className="catalog">
            <div className="catalog__container">
                <h2 className="catalog__title">каталог</h2>
                <div className="catalog__items">
                    <div className="catalog__row">
                        <div className="catalog__item item-catalog item-catalog--text">
                            <p className="item-catalog__text">
                                У нас самый большой выбор цветов, букетов, открыток и подарков.
                                Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором
                            </p>
                            <p className="item-catalog__text">
                                Ознакомьтесь с нашими разделами каталога
                            </p>
                        </div>
                        <div className="catalog__item item-catalog">
                            <h4 className="item-catalog__title">Цветы</h4>
                            <ul className="item-catalog__list">
                                <li>Сборные букеты</li>
                                <li>Монобукеты</li>
                                <li>Композиции из цветов</li>
                                <li>розы</li>
                                <li>свадебные</li>
                            </ul>
                        </div>
                    </div>
                    <div className="catalog__row">
                        <div className="catalog__item item-catalog">
                            <h4 className="item-catalog__title">готовые букеты из сухоцветов</h4>
                            <ul className="item-catalog__list">
                                <li>букеты</li>
                                <li>для интерьера</li>
                                <li>Композиции</li>
                            </ul>
                            <div className="item-catalog__action">
                                <a href="#" className="item-catalog__link">смотреть каталог</a>
                            </div>
                        </div>
                        <div className="catalog__item item-catalog">
                            <h4 className="item-catalog__title">дополнительно</h4>
                            <ul className="item-catalog__list">
                                <li>шары</li>
                                <li>игрушки</li>
                                <li>открытки</li>
                                <li>упаковка</li>
                            </ul>
                            <div className="item-catalog__action">
                                <a href="#" className="item-catalog__link">смотреть каталог</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalog__decor decor-catalog">
                <img src={pinkDecor} alt="decor" className="decor-catalog--pink" />
                <img src={greenDecor} alt="decor" className="decor-catalog--green" />
                <span className="decor-catalog__text decor-catalog--bouqet">букеты</span>
                <span className="decor-catalog__text decor-catalog--flowers">Цветы</span>
                <span className="decor-catalog__text decor-catalog--extra">дополнительно</span>
            </div>
        </section>
    )
}

export default CatalogMainPage;