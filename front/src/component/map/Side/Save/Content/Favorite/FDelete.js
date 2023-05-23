import classes from "./FDelete.module.css";
import {useSelector} from "react-redux";

function FDelete(){
    const selectedData = useSelector(state => state.saveLocation.selectedDelete)

    return (
        <>
            {selectedData.length > 0 ?
                    <div className={classes.fFoot}>
                        <div className={classes.ffBox}>
                            <span>저장 삭제</span>
                        </div>
                    </div> : ""
            }
        </>
    )
}

export default FDelete