import { useState } from "react";

import shopContext from '../header/context';

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import CatalogMainPage from "../catalogMainPage/CatalogMainPage";

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
                </main>
            </Provider>
            <Footer />
        </>
    )
}

export default MainPage;