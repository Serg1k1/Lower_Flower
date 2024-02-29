import '../../style/button.scss';
import './hero.scss';

import HeroOverlay from '../hero-overlay/HeroOverlay';

import flowers from '../../assets/hero/flowers.png';
import flowersBg from '../../assets/hero/flowers-bg.jpg';
import decorPink from '../../assets/hero/decor-pink.svg';
import decorGreen from '../../assets/hero/decor-green.svg';
import signature from '../../assets/hero/decor-signature.svg';

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
                <HeroOverlay />
            </div>
            <div className='hero__flowers' >
                <img className='hero__flower' src={flowers} alt="flowers" />
                <img className='hero__flower-bg' src={flowersBg} alt="flowersBg" />
                <img className='hero__decor-ping' src={decorPink} alt="decor" />
                <img className='hero__decor-green' src={decorGreen} alt="decor" />
                <img className='hero__decor-signature' src={signature} alt="decor" />
            </div>
        </section>
    )
}

export default Hero;