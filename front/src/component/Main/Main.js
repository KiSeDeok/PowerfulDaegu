import Notification from "./notification/Notification";
import Header from "./header/Header";
import Banner from "./banner/Banner"
import Contents from "./contents/Contents";
import Footer from "./footer/Footer";

function Main() {
    return (
        <>
            <Notification/>
            <Header/>
            <Banner/>
            <Contents/>
            <Footer/>
        </>
    );
}

export default Main;
