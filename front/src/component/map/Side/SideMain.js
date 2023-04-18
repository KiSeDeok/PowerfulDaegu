import classes from "./SideMap.module.css"
import Store from "./Store/Store";
import {useDispatch, useSelector} from "react-redux";
import {mapActions} from "../../../store/map/map-slice";

function SideMain(){
    const dispatch = useDispatch()
    const pageIndex = useSelector(state => state.map.index)

    const handleIndex = (index) => {
        dispatch(mapActions.handleIndex({index:index}))
    }

    return (
        <div className={classes.box}>
            <div className={classes.logoBox}><span>Logo</span></div>
            <div className={classes.searchBox}>
                <div className={classes.searchLeftBox}><img src={"/images/map/searchLeft.svg"}/></div>
                <div className={classes.inputBox}><input/></div>
                <div className={classes.searchOptBox}><img src={"/images/map/searchOpt.svg"}/></div>
            </div>
            <div className={classes.categoryBox}>
                <div className={pageIndex === 0 ? classes.activeCategory : ""} onClick={() => handleIndex(0)}><span>스토어 검색</span></div>
                <div className={pageIndex === 1 ? classes.activeCategory : ""} onClick={() => handleIndex(1)}><span>길찾기</span></div>
                <div className={pageIndex === 2 ? classes.activeCategory : ""} onClick={() => handleIndex(2)}><span>저장</span></div>
            </div>
            <div className={classes.contentBox}>
                {pageIndex === 0 ?
                    <Store /> : pageIndex === 1 ?
                        <></> : <></>
                }
            </div>
        </div>
    )
}

export default SideMain
