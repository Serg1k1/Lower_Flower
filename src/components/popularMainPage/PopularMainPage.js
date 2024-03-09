import { useGetAllPopularFlowersQuery } from '../api/flowersApiSlice';

import TinySlider from "tiny-slider-react";

import './popularMainPage.scss';

const PopularMainPage = () => {
    const {
        data: flowers = []
    } = useGetAllPopularFlowersQuery();
    console.log(flowers)
    return (
        <section className="popular">
            <div className="popular__container">
                <div className="popular__content">
                    <div className="popular__titles">
                        <h2 className="popular__title popular__title--first main__title">Популярные</h2>
                        <h2 className="popular__title popular__title--second main__title">букеты</h2>
                    </div>
                    <div className="popular__text">
                        <p className="main__text">Самые любимые композиции наших клиентов</p>
                    </div>
                </div>
                <div className="popular__slider">

                </div>
            </div>
        </section>
    )
}

export default PopularMainPage;