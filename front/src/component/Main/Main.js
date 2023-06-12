import Notification from "./notification/Notification";
import Header from "./header/Header";
import Banner from "./banner/Banner"
import Contents from "./contents/Contents";
import Footer from "./footer/Footer";

import classes from "./Main.module.css";

function Main() {
    return (
        <>
            <div>
                <Header flag ="main"/>

                <div className={classes.bannerArea}>
                    <img className={classes.bannerImg} src='/img/main_banner.png' />
                    <Banner/>
                </div>

                <Contents/>
            </div>
            <Footer/>
        </>
    );
}

export default Main;
