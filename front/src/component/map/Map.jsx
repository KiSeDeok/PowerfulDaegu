import classes from "./Map.module.css"

import MainMap from "./MainMap";
import SideMain from "./Side/SideMain";
import MapInterface from "./Interface/MapInterface";
import useHttp from "../../hooks/use-http";
import {useEffect} from "react";
import ModalSet from "./ModalSet";


function Map(){
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    useEffect(() => {
        // fetchData({url: `http://localhost:3001/store/all`}, (obj) => {
        //     console.log("obj = ", obj)
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
