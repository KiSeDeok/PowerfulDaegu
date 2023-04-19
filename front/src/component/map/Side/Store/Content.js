import classes from "./Content.module.css";
import {useState} from "react";

function Content(props){
    const data = props.data
    const [isDn, setDn] = useState(false)
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [isFavorite, setFavorite] = useState(data.favorite ? true : false)

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
        }
        else{
            setFavorite(true)
        }
    }

    const handleStartPoint = (e) =>{
        e.preventDefault()
        e.stopPropagation()

        if(start) {
            setStart("")
        }
        else{
            setStart(data.startP)
        }
    }

    const handleEndPoint = (e) =>{
        e.preventDefault()
        e.stopPropagation()

        if(end){
            setEnd("")
        }
        else {
            setEnd(data.endP)
        }
    }

    return (
        <div className={classes.content}>
            <div className={classes.mainContent}>
                <div className={classes.left}>
                    <div className={classes.titleDiv}>
                        <span>{data.title}</span>
                        <label>{data.type}</label>
                    </div>
                    <div className={classes.typesDiv}>
                        {true && <div className={classes.open}><span>영업 중</span></div>}
                        {data.point[0].has && <div className={classes.delivery}><span>배달º포장</span></div>}
                        {data.point[1].has && <div className={classes.nice}><img src={"/images/map/goodShop.svg"}/><span>선한영향력가게</span></div>}
                    </div>
                    <div className={classes.addressDiv}>
                        <img src={"/images/map/address.svg"}/>
                        <div>
                            <div className={classes.address}>
                                <span>{data.address.doro}</span>
                                <label>{data.address.upyen}</label>
                            </div>
                            <span className={classes.jibun}>{data.address.jibun}</span>
                        </div>
                    </div>
                    <div className={classes.timeDiv}>
                        <img src={"/images/map/time.svg"}/>
                        <span>11:00 ~ 19:00</span>
                    </div>
                    <div className={classes.phoneDiv}>
                        <img src={"/images/map/phone.svg"}/>
                        <span>{data.phone}</span>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={isDn ? classes.destinationActiveDiv : classes.destinationDiv} onClick={(e) => handleDestinationOpt(e)}>
                        <div className={isDn ? classes.destinationActive : classes.destinationDefault}>
                           <span onClick={handleStartPoint} className={start ? classes.activeSpan : ""}>출발</span>
                           <span>|</span>
                           <span onClick={handleEndPoint} className={end ? classes.activeSpan : ""}>도착</span>
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
            <div>
                <div className={classes.menu}>
                    <div className={classes.menuTop}><span>메뉴</span></div>
                    <div className={classes.menuContent}>
                        <div>
                            <span>자연산 참가자미 모둠(1인)</span>
                            <div></div>
                            <label>25,000</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
