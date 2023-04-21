import classes from "./Pcontent.module.css"
import {useState} from "react";
function Pcontent(props){
    const [check, setCheck] = useState(false)

    return (
        <div className={classes.fbContent}>
            <div className={check ? classes.activeCheckbox : classes.defaultCheckbox}>
                {check ?? <img src={"/images/map/saveType/check.svg"} />}
            </div>
            <div className={classes.fbSpan}>
                <span className={classes.fbName}>세븐일레븐 대구대봉점</span>
                <img src={"/images/map/arrow.svg"}/>
                <span className={classes.fbName}>편의점</span>
            </div>
            <div className={classes.fbFunction}>
                <div className={classes.fbShare}>
                    <img src={"/images/map/share_default.svg"}/>
                </div>
                <div className={classes.fbDestination}>
                    <img src={"/images/map/destination_default.svg"}/>
                </div>
            </div>
        </div>
    )
}

export default Pcontent