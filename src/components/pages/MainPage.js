import { useState } from "react";

import shopContext from '../header/context';

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import CatalogMainPage from "../catalogMainPage/CatalogMainPage";
import PopularMainPage from "../popularMainPage/PopularMainPage";
import HowMainPage from "../howMainPage/HowMainPage";
import OccasionMainPage from "../occasionMainPage/OccasionMainPage";

const MainPage = () => {
    const [shopCoordinates, SetShopCoordinates] = useState({
        position: null,
        setCoordinates: setCoordinates
    });

    const { Provider } = shopContext;

    function setCoordinates(position) {
        SetShopCoordinates({ ...shopCoordinates, position: position });
    }

    return (
        <>
            <Provider value={shopCoordinates}>
                <Header />
                <main className="page">
                    <Hero />
                    <CatalogMainPage />
                    <PopularMainPage />
                    <HowMainPage />
                    <OccasionMainPage />
                </main>
            </Provider>
            <Footer />
        </>
    )
}

export default MainPage;