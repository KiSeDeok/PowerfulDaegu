import classes from "./Find.module.css"
import {useState} from "react";

function Find(){
    const [index, setIndex] = useState(0)



    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.headBox}>
                    <div className={classes.hbContent}>
                        <img src={"/images/map/load/drive_default.svg"}/>
                    </div>
                    <div className={classes.hbContent}>
                        <img src={"/images/map/load/bus_default.svg"}/>
                    </div>
                    <div className={classes.hbContent}>
                        <img src={"/images/map/load/walk_default.svg"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Find