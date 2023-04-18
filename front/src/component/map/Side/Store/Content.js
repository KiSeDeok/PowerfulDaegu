import classes from "./Store.module.css";
import {useState} from "react";

function Content(props){
    const data = props.data
    const [isDn, setDn] = useState(false)

    return (
        <div className={classes.content}>
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
                <div className={isDn ? classes.destinationDiv : classes.destinationActiveDiv}>
                    {!isDn ?
                        <div className={classes.destinationActive}>
                           <span>출발</span>
                           <span>|</span>
                           <span>도착</span>
                        </div>
                        : ""
                    }
                    <img src={!isDn ? "/images/map/destination_active.svg" : "/images/map/destination_default.svg"}/>

                </div>
                <div className={classes.favoriteDiv}>
                    <img src={"/images/map/favorite_default.svg"}/>
                </div>
            </div>
        </div>
    )
}

export default Content
