import classes from "./Save.module.css"
import {useEffect, useState} from "react";
import Favorite from "./Content/Favorite/Favorite";
import Path from "./Content/Path/Path";

function Save(props){
    const [type, setType] = useState(0)

    useEffect(() => {
        if(props.index === 3){
            setType(1)
        }
    }, [])

    const handleType = (index) => {
        if(type !== index) {
            setType(index)
        }
    }

    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.hBody}>
                    <div className={classes.hbContent} onClick={() => handleType(0)}>
                        <img style={{height:"22px", width:"22px"}} src={type === 0 ? "/images/map/saveType/favorite_active.svg" : "/images/map/saveType/favorite_default.svg"}/>
                    </div>
                    <div className={classes.hbContent} onClick={() => handleType(1)}>
                        <img style={{height:"22px", width:"22px"}} src={type === 1 ? "/images/map/saveType/path_active.svg" : "/images/map/saveType/path_default.svg"}/>
                    </div>
                    <div className={type === 0 ? classes.leftHbColor : classes.rightHbColor}></div>
                </div>
            </div>
            <div className={classes.body}>
                {type === 0 ? <Favorite/> : <Path />}
            </div>
        </div>
    )
}

export default Save
