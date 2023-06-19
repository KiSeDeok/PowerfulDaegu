import {useState, useEffect, useContext} from "react";
import {useSelector, useDispatch} from "react-redux";

import useHttp from "../../hooks/use-http";
import Notification from "./notification/Notification";
import Header from "./header/Header";
import Banner from "./banner/Banner"
import Contents from "./contents/Contents";
import Footer from "./footer/Footer";
import {authorityActions} from "../../store/user/authority-slice";

import classes from "./Main.module.css";
import {AppContext} from "../../App";

function Main() {
    const {serverUrl} = useContext(AppContext);
    const { isLoading, error, sendRequest: fetchData } = useHttp();
    const dispatch = useDispatch()
    const authority = useSelector((state) => state.authority.mode)

    useEffect(() => {
        if(!error) return
        switch (error.request.responseURL) {
            case serverUrl + "users":
                dispatch(authorityActions.handleMode({mode: 0}))
                break
            default:
                return
        }
    }, [error, serverUrl]);

    useEffect(() => {
        checkAuth()
    }, [])

    function checkAuth() {
        fetchData({
                url: serverUrl + 'users',
                type:'get'},
            (data) => {
                if(data.role === "admin") {
                    dispatch(authorityActions.handleMode({mode: 2}))
                }else {
                    dispatch(authorityActions.handleMode({mode: 1}))
                }
            }).catch(error => {
            dispatch(authorityActions.handleMode({mode: 0}))
        })
    }

    return (
        <>
            <div>
                <Header flag ="main" mode={authority}/>

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
