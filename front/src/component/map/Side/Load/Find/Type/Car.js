import classes from "./Car.module.css"
import {mapActions} from "../../../../../../store/map/map-slice";
import {useDispatch} from "react-redux";

function Car(props){
    const dispatch = useDispatch()

    const summary = props.data?.summary
    const time = ((summary?.duration / 1000) / 60).toFixed(0)

    const handleMapClick = () => {
        if(props?.data?.path) {
            dispatch(mapActions.handlePolyline({polyline: {data: props.data.path, type: "car"}}))
        }
    }

    return (
        <div className={classes.box} onClick={handleMapClick}>
            <div className={classes.top}>
                <div className={classes.tLeft}>
                    <div className={classes.tlTop}>
                        <div className={classes.tltTime}>
                            {
                                summary.duration ?
                                    time > 60 ?
                                        <>
                                            <span>{(time / 60).toFixed(0)}</span>
                                            <label>시</label>
                                            <span>{time%60}</span>
                                            <label>분</label>
                                        </>
                                            :
                                        <>
                                            <span>{time}</span>
                                            <label>분</label>
                                        </>
                                : "no time"
                            }
                        </div>
                        <span>|</span>
                        <label>{(summary.distance/1000).toFixed(0)}km</label>
                    </div>
                    <div className={classes.tlBottom}>
                        <div className={classes.tlbSpan}>
                            <span>택시비</span>
                            <label>{(summary.taxiFare)}원</label>
                        </div>
                        <span>|</span>
                        <div className={classes.tlbSpan}>
                            <span>통행료</span>
                            <label>{summary.tollFare > 0 ? summary.tollFare + "원" : "무료"}</label>
                        </div>
                        <span>|</span>
                        <div className={classes.tlbSpan}>
                            <span>연료비</span>
                            <label>{summary.fuelPrice}원</label>
                        </div>
                    </div>
                </div>
                <div className={classes.tRight}>
                    <div className={classes.trBox}></div>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.bLoad}>
                    {
                        props.data?.section?.map((ele, index) => (
                            <div key={index} className={classes.blLoad}>
                                <span>{ele.name}</span>
                                <label>{(ele.distance/1000).toFixed(1)}km</label>
                                {index !== props.data.section.length - 1 ? <img style={{width:"11px", height:"8px"}} src={"/images/map/carArrow.svg"}/> : ""}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Car
