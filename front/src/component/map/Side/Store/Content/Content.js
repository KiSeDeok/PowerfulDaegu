import classes from "./Content.module.css";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {mapModalActions} from "../../../../../store/map/modal-slice";
import Talk from "./Talk";
import {mapActions} from "../../../../../store/map/map-slice";
import useHttp from "../../../../../hooks/use-http";
import ContentDetail from "./ContentDetail";

function Content(props){
    const data = props.data
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    // 목적지 이벤트
    const [isDn, setDn] = useState(false)

    // 즐겨찾기 목록
    const [isFavorite, setFavorite] = useState(data.favorite ? true : false)

    // 컨텐츠 active 여부
    const [isActive, setActive] = useState(false)

    // 시간 계산 과정
    const currentDate = new Date();
    const currentHour = currentDate.getHours() * 100 + currentDate.getMinutes();
    const startTime = parseInt(data.sat_start.slice(0, 2)) * 100 + parseInt(data.sat_start.slice(2));
    const endTime = parseInt(data.sat_end.slice(0, 2)) * 100 + parseInt(data.sat_end.slice(2));
    const isWithinTimeRange = startTime <= currentHour && currentHour <= endTime;

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

    const handleFavorite = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if(isFavorite){
            setFavorite(false)
            fetchData({url: `http://localhost:3001/store/like`, type:"delete", data:{id:data.id}})
        }
        else{
            setFavorite(true)
            fetchData({url: `http://localhost:3001/store/like`, type:"post", data:{id:data.id}})
        }
    }

    const handlePoint = (e, type) =>{
        e.preventDefault()
        e.stopPropagation()

        if(type === "start"){
            dispatch(mapActions.handleIndex({index: {place: {start:{name:data.name, point:data.point}}, num: 1}}))
        }
        else{
            dispatch(mapActions.handleIndex({index: {place: {end:{name:data.name, point:data.point}}, num: 1}}))
        }
    }

    const handleIsActive = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const temp = isActive
        setActive(!temp)
    }


    return (
        <div className={isActive ? classes.contentActive : classes.content} onClick={(e) => handleIsActive(e)}>
            <div className={classes.mainContent}>
                <div className={classes.left}>
                    <div className={classes.titleDiv}>
                        <span>{data.name}</span>
                        <label>{data?.store_type?.category}</label>
                    </div>
                    <div className={classes.typesDiv}>
                        {isWithinTimeRange ? <div className={classes.open}><span>영업 중</span></div> : <div className={classes.close}><span>영업 종료</span></div>}
                        {data.delivery && <div className={classes.delivery}><span>배달•포장</span></div>}
                        {/*{data.point[1].has && <div className={classes.nice}><img src={"/images/map/goodShop.svg"}/><span>선한영향력가게</span></div>}*/}
                    </div>
                    <div className={classes.addressDiv}>
                        <img style={{width:"13px", height:"16px"}} src={"/images/map/address.svg"}/>
                        <div>
                            <div className={classes.address}>
                                <span>{data.street_address}</span>
                                <label>{data.city_code}</label>
                            </div>
                            <span className={classes.jibun}>{data.detail_address}</span>
                        </div>
                    </div>
                    {data.sat_end !== "0" && data.sat_start !== "0" &&
                        <div className={classes.timeDiv}>
                            <img style={{width:"13px", height:"16px"}} src={"/images/map/time.svg"}/>
                            <span>
                                {data.sat_start.slice(0, 2)+ ":" + data.sat_start.slice(2)} ~
                                {data.sat_end.slice(0, 2)+ ":" + data.sat_end.slice(2)}
                            </span>
                        </div>
                    }
                    {data.phone_number !== "0" &&
                        <div className={classes.phoneDiv}>
                            <img style={{width:"13px", height:"16px"}} src={"/images/map/phone.svg"}/>
                            <span>{data.phone_number}</span>
                        </div>
                    }
                </div>
                <div className={classes.right}>
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
                    <div className={isFavorite ? classes.activeFavoriteDiv : classes.favoriteDiv} onClick={(e) => handleFavorite(e)}>
                        <img src={isFavorite ? "/images/map/favorite_active.svg" : "/images/map/favorite_default.svg"}/>
                    </div>
                </div>
            </div>
            {isActive ?
            <ContentDetail data={data}/> : ""
            }
        </div>
    )
}

export default Content
