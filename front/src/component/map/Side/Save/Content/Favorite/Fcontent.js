import classes from "./Fcontent.module.css"
import {useEffect, useState} from "react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
function Fcontent({ checks, data, handleItem }){
// const Fcontent = React.memo(({ data, handleItem }) => {
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        handleItem(data.id)
    }

    useEffect(()=> {
        if(checks.includes(data.id)){
            setCheck(true)
        }
        else{
            setCheck(false)
        }

    }, [checks])

    return (
        <div className={classes.fbContent} onClick={handleCheck}>
            <div className={check ? classes.activeCheckbox : classes.defaultCheckbox}>
                {check && <img src={"/images/map/saveType/check.svg"} />}
            </div>
            <div className={classes.fbSpan}>
                <span className={classes.fbName}>{data.name}</span>
                <span className={classes.fbType}>{data.store_type.category}</span>
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

export default Fcontent
