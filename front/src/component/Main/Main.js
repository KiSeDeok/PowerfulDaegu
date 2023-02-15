import Notification from "./notification/Notification";
import Header from "./header/Header";
import Banner from "./banner/Banner"
import Contents from "./contents/Contents";
import Footer from "./footer/Footer";

import classes from "./Main.module.css";

function Main() {
    return (
        <>
            <div className={classes.bbb}>
                <Notification/>
                <Header/>
                <div className={classes.aaa}>
                    <Banner/>
                    <Contents/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Main;
