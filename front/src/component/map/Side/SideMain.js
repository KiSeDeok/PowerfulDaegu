import classes from "./SideMap.module.css"
import Store from "./Store/Store";

function SideMain(){
    return (
        <div className={classes.box}>
            <div><span>Logo</span></div>
            <div>
                <input/>
            </div>
            <div>
                <div><span>스토어 검색</span></div>
                <div><span>길찾기</span></div>
                <div><span>저장</span></div>
            </div>
            <div>
                <Store />
            </div>
        </div>
    )
}

export default SideMain
