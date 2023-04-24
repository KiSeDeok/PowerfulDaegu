import { Route, Routes } from "react-router-dom";
import {useState} from "react";

import Header from "../Main/header/Header";
import Footer from "../Main/footer/Footer";

import CommunityHeader from "./CommunityHeader";
import Notice from "./Notice/Notice";
import DetailContent from "./Notice/DetailContent";
import FrequentlyAsk from "./FrequentlyAsk/FrequentlyAsk";

import classes from "./Community.module.css";

function Community() {
    return (
        <>
            <Header/>
            <div className={classes.aaa}>
                <CommunityHeader selector="notice"/>

                <Routes>
                    <Route path="notice" element={<Notice />} />
                    <Route path="notice/:id" element={<DetailContent />}/>
                    <Route path="feq" element={<FrequentlyAsk />} />
                </Routes>

            </div>
            <Footer/>
        </>
    );
}

export default Community;
