import { Route, Routes } from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import Header from "../Main/header/Header";
import Footer from "../Main/footer/Footer";

import CommunityHeader from "./CommunityHeader";
import Notice from "./Notice/Notice";
import DetailContent from "./Notice/DetailContent";
import FrequentlyAsk from "./FrequentlyAsk/FrequentlyAsk";
import Inquiry from "./Inquiry/Inquiry";

import classes from "./Community.module.css";

function Community() {
    const [selector, setSelector] = useState("")
    const authority = useSelector((state) => state.authority.mode)

    useEffect(() => {
        const pathName = window.location.pathname
        if (pathName.includes("notice")) {
            setSelector("notice")
        }else if(pathName.includes("feq")) {
            setSelector("feq")
        }else if(pathName.includes("inquiry")) {
            setSelector("inquiry")
        }
    }, []);


    return (
        <>
            <Header mode={authority}/>
            <div className={classes.content}>
                <CommunityHeader selector={selector} setSelector={setSelector}/>

                <Routes>
                    <Route path="notice" element={<Notice />} />
                    <Route path="notice/:id" element={<DetailContent />}/>
                    <Route path="feq" element={<FrequentlyAsk />} />
                    <Route path="inquiry" element={<Inquiry />} />
                </Routes>

            </div>
            <Footer/>
        </>
    );
}

export default Community;
