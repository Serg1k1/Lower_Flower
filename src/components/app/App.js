import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";

const App = () => {
    return (
        <>
            <Header />
            <main className="page">
                <Hero />
            </main>
            <Footer />
        </>


    )
}

export default App;