import Navbar from "../../components/Navbar";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Faq />
            <Footer />
        </>
    )
}

export default LandingPage;