import './howMainPage.scss';

import flowerBg from '../../assets/how/flowers-bg.png';
import signature from '../../assets/hero/decor-signature.svg';

const HowMainPage = () => {
    return (
        <section className="how">
            <div className="how__container">
                <h2 className="how__title main__title">Как сделать<br />заказ</h2>
                <div className="how__content content-how">
                    <div className="content-how__row">
                        <div className="content-how__item content-how__item--first">
                            <h4 className="content-how__title">1 шаг</h4>
                            <p className="content-how__text">
                                Выберите какие цветы или подарки вы хотите купить
                            </p>
                        </div>
                        <div className="content-how__item content-how__item--second">
                            <h4 className="content-how__title">2 шаг</h4>
                            <p className="content-how__text">
                                Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp
                            </p>
                        </div>
                        <div className="content-how__item content-how__item--third">
                            <h4 className="content-how__title">3 шаг</h4>
                            <p className="content-how__text">
                                Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне
                            </p>
                        </div>
                    </div>
                    <div className="content-how__row">
                        <div className="content-how__item content-how__item--fourth">
                            <h4 className="content-how__title">4 шаг</h4>
                            <p className="content-how__text">
                                Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен
                            </p>
                        </div>
                        <div className="content-how__item content-how__item--fifth">
                            <h4 className="content-how__title">5 шаг</h4>
                            <p className="content-how__text">
                                Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='how__decor-wrapper'>
                <div className="how__decor">
                    <img className='how__decor-bg' src={flowerBg} alt="flower background" />
                </div>
                <img className='how__decor-signature' src={signature} alt="signature" />
            </div>
        </section>
    )
}

export default HowMainPage;