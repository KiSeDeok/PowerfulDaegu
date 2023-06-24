import classes from "./ContentDetail.module.css"
import Talk from "./Talk";
import {useEffect, useState} from "react";
import {useStore} from "react-redux";
import useHttp from "../../../../../hooks/use-http";

function ContentDetail(props){
    const { isLoading, error, sendRequest: fetchData } = useHttp();
    const [storeData, setStoreData] = useState("")

    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetchData({url: `http://localhost:3001/store?id=${props.data.id}`}, (obj) => {
            setStoreData(obj)
            setLoad(true)
        })
    }, [])

    if(load) {

        return (
            <div className={classes.addActiveContent}>
                <div className={classes.contentActiveSet}>
                    <div className={classes.menu}>
                        <div className={classes.menuTop}><span>메뉴</span></div>
                        <div className={classes.menuSet}>
                            {
                                storeData.menu && storeData.menu.length > 0 ? storeData.menu.map((ele) => (
                                        <div className={classes.menuContents}>
                                            <div className={classes.menuContent}>
                                                <span>{ele.name}</span>
                                                <div className={classes.dotDiv}></div>
                                                <label>{ele.price}</label>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <div className={classes.noMenuDiv}>
                                        <img src={"/images/map/noMenu.svg"}/>
                                        <span>등록된 메뉴가 없어요</span>
                                    </div>
                            }
                        </div>
                    </div>
                    <Talk data={props.data}/>
                    <div className={classes.functionSet}>
                        <div className={classes.functionDiv}>
                            <img src={"/images/map/share_default.svg"}/>
                        </div>
                        <div className={classes.functionDiv}>
                            <img src={"/images/map/destination_default.svg"}/>
                        </div>
                        <div className={classes.functionDiv}>
                            <img src={"/images/map/favorite_default.svg"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return <></>
    }
}

export default ContentDetail