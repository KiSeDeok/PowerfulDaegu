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
                <Header/>
                <div className={classes.ccc}>
                    <Banner/>
                </div>
                <Contents/>

            </div>
            <Footer/>
        </>
    );
}

export default Main;
