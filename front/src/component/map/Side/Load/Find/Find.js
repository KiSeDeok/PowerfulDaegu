import classes from "./Find.module.css"
import {useState} from "react";
import {useSelector} from "react-redux";
import FindContent from "./FindContent";

function Find(){
    const [index, setIndex] = useState(0)
    const searchData = useSelector(state => state.map.searchData)

    console.log("searchData = ", searchData)

    const handleIndex= (index) => {
        setIndex(index)
    }

    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.headBox}>
                    <div className={classes.hbContent} onClick={() => handleIndex(0)}>
                        <img src={index === 0 ? "/images/map/load/drive_active.svg" : "/images/map/load/drive_default.svg"}/>
                    </div>
                    <div className={classes.hbContent} onClick={() => handleIndex(1)}>
                        <img src={index === 1 ? "/images/map/load/bus_active.svg" : "/images/map/load/bus_default.svg"}/>
                    </div>
                    <div className={classes.hbContent} onClick={() => handleIndex(2)}>
                        <img src={index === 2 ? "/images/map/load/walk_active.svg" : "/images/map/load/walk_default.svg"}/>
                    </div>
                    <div className={classes.hbColor} style={{left: `${index === 0 ? "0px" : index === 1 ? "48px" : "96px"}`}} ></div>
                </div>
            </div>
            <div className={classes.body}>
                {searchData.map((ele) => (
                    <FindContent data={ele}/>
                ))}
            </div>
        </div>
    )
}

export default Find
