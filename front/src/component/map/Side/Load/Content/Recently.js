import classes from "./Recently.module.css"
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import RecentlyData from "./RecentlyData";

function Recently(){
    // 쿠키 관련
    const [cookies, setCookie, removeCookie] = useCookies(['path']);

    // 검색 경로 데이터
    const [data, setData] = useState([])

    // 데이터 로딩 여부
    const [isLoad , setLoad] = useState(false)

    useEffect(()=>{
        if(cookies.path){
            console.log("cookies.path =", cookies.path)
            setData(cookies.path)
        }
        else{
            setData([])
        }

        setLoad(true)
    }, [cookies])

    if(isLoad && data && data.length > 0) {
        return (
            <div className={classes.recentlyBox}>
                <div className={classes.rHead}>
                    <img style={{width:"14px", height:"15px"}} src={"/images/map/destination_color.svg"}/>
                    <span>최근 탐색한 경로</span>
                </div>
                <div className={classes.rBody}>
                    <RecentlyData data={data}/>
                </div>
            </div>
        )
    }
    else{
        return;
    }
}

export default Recently
