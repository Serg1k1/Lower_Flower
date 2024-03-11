
import './occasionMainPage.scss';

import img1 from '../../assets/occasionMainPage/img1.jpg';
import img2 from '../../assets/occasionMainPage/img2.jpg';
import img3 from '../../assets/occasionMainPage/img3.jpg';
import img4 from '../../assets/occasionMainPage/img4.jpg';

const OccasionMainPage = () => {
    return (
        <section className="occasion">
            <div className="occasion__container">
                <div className="occasion__header">
                    <div className="occasion__titles main__title">
                        <h2 className="occasion__title occasion__title--first">особенный</h2>
                        <h2 className="occasion__title occasion__title--second">повод?</h2>
                    </div>
                    <div className="occasion__image">
                        <img src={img1} alt="content" />
                    </div>
                </div>
                <div className="occasion__body body-occasion">
                    <div className="body-occasion__text">
                        <p className="body-occasion__description">
                            Мы готовы прийти на помощь и собрать уникальный букет,
                            на любой вкус, бюджет и для любого события по вашему индивидуальному заказу.
                        </p>
                        <ul className="body-occasion__list">
                            <li>учтем даже самые изысканные пожелания;</li>
                            <li>подберем свежайшие цветы и сделаем уникальный букет или композицию;</li>
                            <li>оплатить можно при получении или онлайн на сайте</li>
                        </ul>
                    </div>
                    <div className="body-occasion__image occasion__image">
                        <img src={img2} alt="content" />
                    </div>
                    <div className="body-occasion__image occasion__image">
                        <img src={img3} alt="content" />
                    </div>
                    <div className="body-occasion__image occasion__image">
                        <img src={img4} alt="content" />
                    </div>
                </div>
                <div className="occasion__action">
                    <button className="occasion__button button">собрать индивидуальный букет</button>
                </div>
            </div>
        </section>
    )
}

export default OccasionMainPage;