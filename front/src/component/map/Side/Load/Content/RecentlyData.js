import classes from "./RecentlyData.module.css"
import {useCookies} from "react-cookie";
import {mapActions} from "../../../../../store/map/map-slice";
import {useDispatch} from "react-redux";

function RecentlyData(props){
    const dispatch = useDispatch()

    // 쿠키 관련
    const [cookies, setCookie] = useCookies(['path']);

    console.log("props= ", props)

    /** 쿠키 삭제 */
    const handleDeleteCookies = (element) => {
        // 삭제 후 새로운 쿠키 설정
        const newCookies = cookies.path.map((ele) => {
            return ele.startName === element.startName && ele.endName === element.endName ? false : ele
        }).filter(Boolean);

        setCookie("path", newCookies, { path: "/"});
    }

    const handleClick = (element) => {
        dispatch(mapActions.handleIndex({index: {
            place: {
                start:{name:element.startName, point:element.start},
                end:{name:element.endName, point:element.end}},
                num: 1}
        }))
    }

    return (
        <div>
            {props.data.map((ele, index) => {
                return (
                    <div onClick={() => handleClick(ele)} key={index} className={classes.rContents}>
                        <img style={{width:"16px", height:"17px"}} className={classes.reFImg} src={"/images/map/destination_default.svg"}/>
                        <div className={classes.rcBody}>
                            <span>{ele.startName}</span>
                            <img style={{width:"11px", height:"17px"}} src={"/images/map/arrow.svg"}/>
                            <label>{ele.endName}</label>
                        </div>
                        <img onClick={() => handleDeleteCookies(ele)} className={classes.reSImg} src={"/images/map/x.svg"}/>
                    </div>
                )
            })}
        </div>
    )
}

export default RecentlyData