import { useRef } from 'react';
import { useGetAllPopularFlowersQuery } from '../api/flowersApiSlice';
import { useDynamicAdapt } from '../hooks/useDynamicAdapt';

import classNames from 'classnames';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import './popularMainPage.scss';
import '../../style/button.scss';

import arrow from '../../assets/popularMainPage/arrow.svg';
import sliderBg from '../../assets/popularMainPage/bg.jpg';

const PopularMainPage = () => {
    const sliderRef = useRef();

    const {
        data: flowers = [],
        isSuccess
    } = useGetAllPopularFlowersQuery();

    useDynamicAdapt();

    const settings = {
        nav: false,
        mouseDrag: true,
        loop: false,
        items: 1,
        gutter: 30,
        controls: false,
        responsive: {
            600: {
                items: 2,
                gutter: 25,
            },
            991: {
                items: 3
            }
        }
    };

    const onGoTo = (dir) => sliderRef.current.slider.goTo(dir);

    const renderSliderItems = (arr) => {

        return arr.map((item) => {
            const labelClazz = classNames({
                "slider-popular__label": true,
                "slider-popular__label--sale": item.label === 'sale',
                "slider-popular__label--new": item.label === 'new',
            })

            return (
                <div key={item.id} className="slider-popular__item">
                    <div className="slider-popular__image">
                        <img src={item.thumbnail} alt={item.name} />
                        {item.label !== 'null'
                            ? <span className={labelClazz}>{item.label}</span>
                            : null}
                    </div>
                    <div className="slider-popular__body">
                        <h4 className="slider-popular__title">{item.name}</h4>
                        <div className="slider-popular__price">{item.price}</div>
                        <button className="slider-popular__button button button--outlined">В корзину</button>
                    </div>
                </div>
            )
        })
    }

    const sliderItems = renderSliderItems(flowers);

    return (
        <section className="popular">
            <div className="popular__container">
                <div className="popular__content">
                    <div className="popular__titles main__title">
                        <h2 className="popular__title popular__title--first">Популярные</h2>
                        <h2 className="popular__title popular__title--second">букеты</h2>
                    </div>
                    <div className="popular__text">
                        <p className="main__text">Самые любимые композиции наших клиентов</p>
                    </div>
                </div>
                <div className='popular-slider__wrapper'>
                    <TinySlider ref={sliderRef} settings={settings} className="popular__slider slider-popular">
                        {sliderItems}
                    </TinySlider>

                </div>
                <div data-da=".popular-slider__wrapper,1320,first" className="slider__buttons">
                    <button onClick={() => onGoTo('prev')} className="slider__button slider__button--prev">
                        <img src={arrow} alt="arrow" />
                    </button>
                    <button onClick={() => onGoTo('next')} className="slider__button slider__button--next">
                        <img src={arrow} alt="arrow" />
                    </button>
                </div>
                <a href='#' className="popular__all">
                    <span className='popular__all-text' >смотреть весь каталог</span>
                    <svg width="40" height="6" viewBox="0 0 40 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='popular__all-arrow' d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="#D978AC" />
                    </svg>
                </a>
            </div>
            <div className="popular__decor">
                <img src={sliderBg} alt="background" className="popular__decor-bg" />
                <svg className="popular__decor-pink" width="1001" height="1007" viewBox="0 0 1001 1007" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_22)">
                        <path d="M739.258 599.799C697.438 664.621 602.278 816.975 469.717 731.455C337.157 645.934 217.394 354.924 259.214 290.102C301.033 225.28 442.396 242.059 574.957 327.58C707.517 413.1 781.077 534.977 739.258 599.799Z" fill="#7D2253" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_22" x="0.741211" y="0.63623" width="1000.24" height="1006.24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_22" />
                        </filter>
                    </defs>
                </svg>
                <svg className="popular__decor-green" width="778" height="1391" viewBox="0 0 778 1391" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_21)">
                        <path d="M398 1132C346.282 1212.16 398.068 726.653 194 595C-10.0684 463.347 -79.9444 371.315 -28.2269 291.151C23.4907 210.986 230.846 252.726 434.915 384.379C638.983 516.032 449.718 1051.84 398 1132Z" fill="#43FFD2" fillOpacity="0.47" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_21" x="-294.605" y="0.395508" width="1072.14" height="1390.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_21" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default PopularMainPage;