import classes from "./Pcontent.module.css"
import React, {useEffect, useState} from "react";
import FDelete from "../Favorite/FDelete";
import {useDispatch} from "react-redux";
import {mapActions} from "../../../../../../store/map/map-slice";
function Pcontent({checks, data, handleItem}){
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)

    // 목적지 이벤트
    const [isDn, setDn] = useState(false)

    useEffect(()=> {
        console.log("data =" , data)

        if(checks.includes(data.id)){
            setCheck(true)
        }
        else{
            setCheck(false)
        }

    }, [checks])

    const handleDestinationOpt = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if(isDn){
            setDn(false)
        }
        else{
            setDn(true)
        }
    }

    const handleCheck = () => {
        handleItem(data.id)
    }

    const handlePoint = (e, type) =>{
        e.preventDefault()
        e.stopPropagation()

        const sPoint = data.url.match(/start=(.*?)&/)?.[1];
        const gPoint = data.url.match(/goal=(.*)/)?.[1];

        dispatch(mapActions.handleIndex({index: {place: {start:{name:data.start, point:sPoint}, end:{name:data.goal, point:gPoint}}, num: 1}}))
    }

    return (
        <div className={classes.fbContent} onClick={handleCheck}>
            <div className={check ? classes.activeCheckbox : classes.defaultCheckbox}>
                {check && <img src={"/images/map/saveType/check.svg"} />}
            </div>
            <div className={classes.fbSpan}>
                <span className={classes.fbName}>{data.start}</span>
                <img src={"/images/map/arrow.svg"}/>
                <span className={classes.fbName}>{data.goal}</span>
            </div>
            <div className={classes.fbFunction}>
                <div className={classes.fbShare}>
                    <img src={"/images/map/share_default.svg"}/>
                </div>
                <div className={isDn ? classes.destinationActiveDiv : classes.destinationDiv} onClick={(e) => handleDestinationOpt(e)}>
                    <div className={isDn ? classes.destinationActive : classes.destinationDefault}>
                        <span onClick={(e) => handlePoint(e,"start")} className={classes.activeSpan}>출발</span>
                        <span>|</span>
                        <span onClick={(e) => handlePoint(e,"end")} className={classes.activeSpan}>도착</span>
                    </div>
                    <div className={isDn ? classes.destinationActiveDiv : classes.destinationDiv}>
                        <img src={isDn ? "/images/map/destination_active.svg" : "/images/map/destination_default.svg"}/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Pcontent
