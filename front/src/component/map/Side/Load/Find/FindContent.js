import classes from "./FindContent.module.css"
import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import TransfortSet from "./TransfortSet";
import {useDispatch, useSelector} from "react-redux";
import {mapActions} from "../../../../../store/map/map-slice";

function FindContent(props){
    const dispatch = useDispatch()

    const [type, setType] = useState("short")
    const destination = useSelector(state => state.map.destination)

    const data = props.data
    const busSubwaySet = props.data?.legs[0]?.steps.filter(ele => ele.type === "BUS" || ele.type === "SUBWAY")

    const handleDetail = (e) => {
        e.stopPropagation()
        e.preventDefault()

        if(type === "short"){
            setType("detail")
        }

        else if(type === "detail"){
            setType("short")
        }
    }

    const handleMapClick = (e) => {
        e.stopPropagation()
        e.preventDefault()

        const position = []

        data.legs[0]?.steps?.map((ele) => {
            position.push(ele)
        })

        dispatch(mapActions.handlePolyline({polyline:position}))
    }

    return (
        <div className={classes.box} onClick={handleMapClick}>
            <div className={classes.head}>
                <div className={classes.headLeft}>
                    <div className={classes.hlTimeBox}>
                        <span>{data.duration}</span>
                        <label>분</label>
                    </div>
                    <div className={classes.hlPriceBox}>
                        <span>어린이 {data.fare === 1250 ? 400 : data.fare === 1650 ? 650 : 400}원</span>
                        <span>|</span>
                        <span>청소년 {data.fare === 1250 ? 850 : data.fare === 1650 ? 1100 : 400}원</span>
                        <span>|</span>
                        <span>일반 {data.fare}원</span>
                        <img src={"/images/map/help.svg"}/>
                    </div>
                </div>
                <div className={classes.headRight}>
                    <div className={classes.hrBox}>
                        <img src={"/images/map/star.svg"}/>
                    </div>
                </div>
            </div>
            {type === "short" ?
                <div className={classes.shortSummary}>
                    {data.legs[0]?.steps.map((ele, index) => {
                        return (
                            <div className={`${classes.shortFormDiv} ${index === 0 ? classes.firstForm : index === data.legs[0]?.steps.length-1 ?  classes.lastForm : ""}`}>
                                <div className={`${classes.leftCircle} ${ele.type === "WALKING" ? classes.walkCircle : classes.busCircle}`}></div>
                                <div className={`${ele.type === "WALKING" ? classes.walkLine : classes.busLine}`}></div>
                                <img src={ele.type === "WALKING" ? "/images/map/walk_small.svg" : ele.type === "BUS" ? "/images/map/bus_small.svg" : "/images/map/subway_small.svg"} />
                                {
                                    index === data.legs[0]?.steps.length-1 ? <div className={`${classes.lastCircle}`}></div> : ""
                                }
                            </div>
                        )

                    })}
                </div> : ""
            }
            <div className={type === "short" ? classes.shortDetailBox : `${classes.shortDetailBox} ${classes.detailBorder}`}>
                {type === "short" ?
                    <div className={classes.sdFirstBox}>
                        <div className={classes.sdLeftArea}></div>
                    </div> : ""
                }

                {type === "short" ?

                    busSubwaySet.map((ele, index) => {
                        return (
                            <>
                                <div
                                    className={`${ele.type === "BUS" ? classes.sdDetailBusBox : classes.sdDetailBusBox} ${index === busSubwaySet.length - 1 ? classes.sdLastIndexBox : ""}`}>
                                    <div className={classes.sdLeftArea}>
                                        <img
                                            src={ele.type === "BUS" ? "/images/map/bus_large.svg" : "/images/map/subway_large.svg"}/>
                                        <span>{ele.routes[0].name}</span>
                                    </div>
                                    <div className={`${classes.sdMiddleArea} ${ele.type === "BUS" ? classes.sdMiddleAreaBus : classes.sdMiddleAreaBus}`}>
                                        <div className={classes.sdmCircle}></div>
                                    </div>
                                    <div className={classes.sdRightArea}>
                                        <div className={classes.sdTransfortBox}>
                                            <span>{ele.stations[0].displayName || ""}</span>
                                            <label>({ele.stations[0].displayCode || ""})</label>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${classes.sdDetailArriveBox} ${index === busSubwaySet.length - 1 ? classes.sdLastArriveBox : ""}`}>
                                    <div className={classes.sdLeftArea}>
                                        <div className={classes.sdlBox}><span>하차</span></div>
                                    </div>
                                    <div className={classes.sdMiddleArea}>
                                        {
                                            index === busSubwaySet.length - 1 ?
                                            <div className={classes.sdmLine}></div>
                                                :
                                            ""
                                        }

                                        <div className={classes.sdmCircle}></div>
                                    </div>
                                    <div className={classes.sdRightArea}>
                                        <div className={classes.sdTransfortBox}>
                                            <span>{ele.stations[0].displayName || ""}</span>
                                            <label>({ele.stations[0].displayCode || ""})</label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })

                    :
                    <>
                        {
                            props.data?.legs[0]?.steps.map((ele, index) => {
                            console.log("ele =", ele)

                            return (
                                <div className={classes.detailBox}>
                                    <div
                                        className={`${ele.type === "WALKING" ? classes.sdDetailWalkBox : classes.sdDetailBusBox} ${index === busSubwaySet.length - 1 ? classes.sdLastIndexBox : ""}`}>
                                        <div className={classes.sdLeftArea}>
                                            <img
                                                src={ele.type === "WALKING" ? "/images/map/walk_large.svg" : ele.type === "BUS" ? "/images/map/bus_large.svg" : "/images/map/subway_large.svg"}/>
                                            <span>{ele.routes[0]?.name || "걷기"}</span>
                                        </div>
                                        <div className={`${classes.sdMiddleArea} ${ele.type === "WALKING" ? classes.sdMiddleAreaWalk : classes.sdMiddleAreaBus}`}>
                                            <div className={classes.sdmCircle}></div>
                                            {index === 0 ? <div className={classes.firstCircle}></div> : ""}
                                        </div>
                                        <div className={classes.sdRightArea}>
                                            <div className={classes.sdTransfortBox}>
                                                <span>{ele.stations[0]?.displayName || ele.walkpath?.summary?.ways[0]?.name}</span>
                                                <label>{ele.stations[0]?.displayCode ? "(" + ele.stations[0]?.displayCode + ")" : ""}</label>
                                            </div>
                                            <div>
                                                {ele.type === "WALKING" ?
                                                    <label>{ele.duration}분</label>
                                                    :
                                                    <TransfortSet station={ele.stations}/>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    {ele.type !== "WALKING" ?
                                        <div className={classes.sdDetailArriveBox}>
                                            <div className={classes.sdLeftArea}>
                                                <div className={classes.sdlBox}><span>하차</span></div>
                                            </div>
                                            <div className={classes.sdMiddleArea}>
                                                {/*{index === busSubwaySet.length - 1 ?*/}
                                                {/*    <div className={classes.sdmLine}></div> : ""}*/}

                                                <div className={classes.sdmCircle}></div>
                                            </div>
                                            <div className={classes.sdRightArea}>
                                                <div className={classes.sdTransfortBox}>
                                                    <span>{ele.stations[ele.stations.length - 1].displayName || ""}</span>
                                                    <label>({ele.stations[ele.stations.length - 1].displayCode || ""})</label>
                                                </div>
                                            </div>
                                        </div> : ""
                                    }
                                </div>
                            )
                        })}

                        <div className={classes.detailBoxArrive}>
                            <div className={classes.dbLeftArea}>
                                <div className={classes.dblBox}><span>도착</span></div>
                            </div>
                            <div className={classes.dbMiddleArea}>
                                <div className={classes.dbmCircle}></div>
                            </div>
                            <div className={classes.dbRightArea}>
                                <div className={classes.dbTransfortBox}>
                                    <span>{destination}</span>
                                </div>
                            </div>
                        </div>
                    </>


                }
                <div className={classes.sdLastBox} onClick={handleDetail}>
                    <span>자세히 보기</span>
                </div>
            </div>
        </div>
    )
}

export default FindContent
