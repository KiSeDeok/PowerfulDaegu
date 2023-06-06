import classes from "./Fcontent.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {mapActions} from "../../../../../../store/map/map-slice";
import {saveLocationActions} from "../../../../../../store/map/saveLoaction-slice";
function Fcontent(props){
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check)
        dispatch(saveLocationActions.handleSelectDelete({id:props.data.id}))
    }

    return (
        <div className={classes.fbContent} onClick={handleCheck}>
            <div className={check ? classes.activeCheckbox : classes.defaultCheckbox}>
                {check && <img src={"/images/map/saveType/check.svg"} />}
            </div>
            <div className={classes.fbSpan}>
                <span className={classes.fbName}>{props.data.name}</span>
                <span className={classes.fbType}>{props.data.type}</span>
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
