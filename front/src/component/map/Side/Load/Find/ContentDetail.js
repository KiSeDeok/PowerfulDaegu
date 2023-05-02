import classes from "./FindContent.module.css";
import {useState} from "react";

function ContentDetail(props){
    const data = props.data
    const index = props.index
    const busSubwaySet = props.busSubwaySet

    const [type, setType] = useState("short")


    return (
        type === "short" ?
            <>
                <div
                    className={`${data.type === "BUS" ? classes.sdDetailBusBox : classes.sdDetailBusBox} ${index === busSubwaySet.length - 1 ? classes.sdLastIndexBox : ""}`}>
                    <div className={classes.sdLeftArea}>
                        <img src={data.type === "BUS" ? "/images/map/bus_large.svg" : "/images/map/subway_large.svg"}/>
                        <span>{data.routes[0].name}</span>
                    </div>
                    <div
                        className={`${classes.sdMiddleArea} ${data.type === "BUS" ? classes.sdMiddleAreaBus : classes.sdMiddleAreaSubway}`}>
                        <div className={classes.sdmCircle}></div>
                    </div>
                    <div className={classes.sdRightArea}>
                        <span>{data.stations[0].displayName || ""}</span>
                        <label>({data.stations[0].displayCode || ""})</label>
                    </div>
                </div>
                <div
                    className={`${classes.sdDetailArriveBox} ${index === busSubwaySet.length - 1 ? classes.sdLastArriveBox : ""}`}>
                    <div className={classes.sdLeftArea}>
                        <div className={classes.sdlBox}><span>하차</span></div>
                    </div>
                    <div className={classes.sdMiddleArea}>
                        {index === busSubwaySet.length - 1 ? <div className={classes.sdmLine}></div> : ""}

                        <div className={classes.sdmCircle}></div>
                    </div>
                    <div className={classes.sdRightArea}>
                        <span>{data.stations[0].displayName || ""}</span>
                        <label>({data.stations[0].displayCode || ""})</label>
                    </div>
                </div>
            </>

            :

            <>

            </>

    )
}

export default ContentDetail
