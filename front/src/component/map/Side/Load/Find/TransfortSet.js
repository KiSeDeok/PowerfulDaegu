import classes from "./TransfortSet.module.css";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

function TransfortSet(props){
    const [selected, setSelect] = useState(false)
    const station = props.station

    const handleSelect = () => {
        setSelect(!selected)
    }

    return (
        <div className={classes.box}>
            <div className={selected ? classes.selectedBox : classes.noSelectedBox} onClick={handleSelect}>
                <span>{station.length}개 정류장 이동</span>
                <img style={{width:"7px", height:"4px"}} src={!selected ? "/images/map/selectArrow.svg" : "/images/map/selectArrow_select.svg"}/>
            </div>
            <div className={selected ? classes.selectedStation : classes.noSelectedStation}>
                {station.map((ele) => {
                    return (
                        <div key={uuidv4()} className={classes.stationBox}>
                            <span>{ele.name}</span>
                        </div>
                    )
                })}
                <div className={classes.emptyBox}></div>
            </div>
        </div>
    )
}

export default TransfortSet
