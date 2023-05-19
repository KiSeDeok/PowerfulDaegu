import classes from "./Map.module.css"

import MainMap from "./MainMap";
import SideMain from "./Side/SideMain";
import MapInterface from "./MapInterface";
import useHttp from "../../hooks/use-http";
import {useEffect} from "react";
import ModalSet from "./Side/ModalSet";


function Map(){
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    useEffect(() => {
        fetchData({url: `http://43.200.14.40/store/all`}, (obj) => {
        // fetchData({url: `http://localhost:3001/store/all`}, (obj) => {
            console.log("obj = ", obj)
        })
        // fetch("http://localhost:3001/store/all", {
        //     method : "GET",
        // }) .then(res=>res.json())       // 리턴값이 있으면 리턴값에 맞는 req 지정
        //     .then(res=> {
        //         console.log(res)
        //         // setCookie('access_token', res.access_token)
        //     });
    }, [])

    return (
        <div className={classes.box}>
            <MainMap/>
            <SideMain/>
            <MapInterface />
            <ModalSet />
        </div>
    )
}

export default Map
