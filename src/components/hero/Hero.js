import '../../style/button.scss';
import './hero.scss';

import flowers from '../../assets/hero/flowers.png';
import flowersBg from '../../assets/hero/flowers-bg.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__body">
                    <div className="hero__titles">
                        <h1 className="hero__title--up">Lower</h1>
                        <h2 className="hero__title--down">Flower</h2>
                    </div>
                    <div className="hero__text">
                        <p>Создаём для тех, кто ценит свежесть и изящество цветка</p>
                    </div>
                    <div className="hero__action">
                        <button className="hero__button button">смотреть каталог</button>
                    </div>
                </div>
                <div className='hero__flowers' >
                    <img className='hero__flower' src={flowers} alt="flowers" />
                    <img className='hero__flower-bg' src={flowersBg} alt="flowersBg" />
                </div>
            </div>
        </section>
    )
}

export default Hero;