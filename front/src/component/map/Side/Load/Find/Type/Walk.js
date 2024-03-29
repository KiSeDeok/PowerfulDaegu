import classes from "./Walk.module.css"
import {mapActions} from "../../../../../../store/map/map-slice";
import {useDispatch} from "react-redux";

function Walk(props){
    const dispatch = useDispatch()

    const summary = props?.data?.summary
    const time = (summary?.duration / 60).toFixed(0)

    const handleMapClick = () => {
        console.log("props.data =", props.data)
        if(props?.data?.legs[0]?.steps) {
            dispatch(mapActions.handlePolyline({polyline: {data: props.data.legs[0].steps, type: "walk"}}))
        }
    }

    return (
        <div className={classes.box} onClick={handleMapClick}>
            <div className={classes.left}>
                {summary.option && (summary.option === "reco" || summary.option === "wide" || summary.option) ?
                    <div className={summary.option === "reco" ? classes.blReco : summary.option === "wide" ? classes.blWide : classes.blShort}>
                        {summary.option === "reco" ? <span>추천</span> : summary.option === "wide" ? <span>큰길우선</span> : <span>최단거리</span>}
                    </div>
                    :
                    ""
                }
                <div className={classes.lRight}>
                    <div className={classes.lrTime}>
                        {time > 60 ?
                            <>
                                <span>{(time / 60).toFixed(0)}</span>
                                <label style={{marginRight:"4px"}}>시</label>
                                <span>{time % 60}</span>
                                <label>분</label>
                            </>
                            :
                            <>
                                <span>{(summary.duration / 60).toFixed(0)}</span>
                                <label>분</label>
                            </>
                        }
                    </div>
                    <span>|</span>
                    <div className={classes.lrDistnace}>
                        <span>{(summary.distance/1000).toFixed(0)}km</span>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.rBox}></div>
            </div>

        </div>
    )
}

export default Walk
