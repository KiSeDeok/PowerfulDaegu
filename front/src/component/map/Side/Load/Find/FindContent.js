import classes from "./FindContent.module.css"

function FindContent(props){
    const data = props.data

    const busSubwaySet = props.data?.legs[0]?.steps.filter(ele => ele.type === "BUS" || ele.type === "SUBWAY")

    console.log("data= ", data)

    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.headLeft}>
                    <span>11분</span>
                    <div className={classes.hlPriceBox}>
                        <span>어린이 800원</span>
                        <span>|</span>
                        <span>청소년 1300원</span>
                        <span>|</span>
                        <span>일반 1800원</span>
                        <img />
                    </div>
                </div>
                <div className={classes.headRight}>
                    <div className={classes.hrBox}>
                        <img/>
                    </div>
                </div>
            </div>
            <div className={classes.shortSummary}>
                {data.legs[0]?.steps.map((ele, index) => {
                    return (
                        <div className={`${classes.shortFormDiv} ${index === 0 ? classes.firstForm : index === data.legs[0]?.steps.length-1 ?  classes.lastForm : ""}`}>
                            <div className={`${classes.leftCircle} ${ele.type === "WALKING" ? classes.walkCircle : classes.busCircle}`}></div>
                            <div className={`${ele.type === "WALKING" ? classes.walkLine : classes.busLine}`}></div>
                            <img src={ele.type === "WALKING" ? "/images/map/walk.svg" : ele.type === "BUS" ? "/images/map/bus.svg" : "/images/map/walk.svg"} />
                            {
                                index === data.legs[0]?.steps.length-1 ? <div className={`${classes.lastCircle}`}></div> : ""
                            }
                        </div>
                    )

                })}
            </div>
            <div className={classes.shortDetailBox}>
                <div className={classes.sdFirstBox}>
                    <div className={classes.sdLeftArea}></div>
                </div>
                {busSubwaySet.map((ele, index) => {
                    return (
                        <>
                            <div className={`${ele.type === "BUS" ? classes.sdDetailBusBox : classes.sdDetailSubwayBox} ${index === busSubwaySet.length-1 ? classes.sdLastIndexBox : ""}`}>
                                <div className={classes.sdLeftArea}>
                                    <img src={ele.type === "BUS" ? "/images/map/bus.svg" : "/images/map/bus.svg"} />
                                    <span>{ele.routes[0].name}</span>
                                </div>
                                <div className={`${classes.sdMiddleArea} ${ele.type === "BUS" ? classes.sdMiddleAreaBus : classes.sdMiddleAreaSubway}`}>
                                    <div className={classes.sdmCircle}></div>
                                </div>
                                <div className={classes.sdRightArea}>
                                    <span>{ele.stations[0].displayName || ""}</span>
                                    <label>({ele.stations[0].displayCode || ""})</label>
                                </div>
                            </div>
                            <div className={`${classes.sdDetailArriveBox} ${index === busSubwaySet.length-1 ? classes.sdLastArriveBox : ""}`}>
                                <div className={classes.sdLeftArea}>
                                    <div className={classes.sdlBox}><span>하차</span></div>
                                </div>
                                <div className={classes.sdMiddleArea}>
                                    {index === busSubwaySet.length-1 ? <div className={classes.sdmLine}></div> : ""}

                                    <div className={classes.sdmCircle}></div>
                                </div>
                                <div className={classes.sdRightArea}>
                                    <span>{ele.stations[0].displayName || ""}</span>
                                    <label>({ele.stations[0].displayCode || ""})</label>
                                </div>
                            </div>
                        </>
                    )
                })}
                <div className={classes.sdLastBox}>
                    <span>자세히 보기</span>
                </div>
            </div>
        </div>
    )
}

export default FindContent
