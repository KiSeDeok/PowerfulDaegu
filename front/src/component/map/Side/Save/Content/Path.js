import classes from "./Path.module.css"
import Pcontent from "./Pcontent";

function Path(){
    return (
        <div className={classes.box}>
            <div className={classes.fHead}>
                <div className={classes.fhContent}>
                    <span>최근 저장순</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                </div>
            </div>
            <div className={classes.fBody}>
                <Pcontent/>
            </div>
        </div>
    )
}

export default Path