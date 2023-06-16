import classes from "./Store.module.css"
import {useEffect, useState} from "react";
import useHttp from "../../../../../hooks/use-http";
import {mapActions} from "../../../../../store/map/map-slice";
import {useDispatch} from "react-redux";
import {mapStoreActions} from "../../../../../store/map/mapStore-slice";

function Store(){
    const dispatch = useDispatch()

    const [data, setData] = useState([])
    const [isLoad, setLoad] = useState(false)
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    useEffect(() => {
        getFetchData()
    }, [])

    const getFetchData = () => {
        fetchData({url: `http://localhost:3001/store/like`}, (obj) => {
            if(obj && obj.length > 0) {
                const categoryValues = obj.map((item) => item.store);

                console.log("categoryValues= ", categoryValues)
                setData(categoryValues)
            }
            else{
                setData([])
            }

            setLoad(true)
        })
    }

    const handlePageIndex = () => {
        dispatch(mapActions.handleIndex({index: {num: 2}}))
    }

    const handleStoreItems = (element) => {
        dispatch(mapActions.handleIndex({index: {num: 0}}))
        dispatch(mapStoreActions.handleStoreSearch({value:element.name, region:[], type:[]}))
    }

    if(isLoad){
        return (
            <div className={classes.pathBox}>
                <div className={classes.pHead}>
                    <div className={classes.phLeft}>
                        <img style={{width:"18px", height:"17px"}} src={"/images/map/favorite_active.svg"}/>
                        <span>저장한 스토어</span>
                    </div>
                    <div onClick={handlePageIndex} className={classes.phRight}>
                        <span>저장 관리</span>
                    </div>
                </div>
                <div className={classes.pBody}>
                    {data.map((ele, index) => {
                        return (
                            <div onClick={() => handleStoreItems(ele)} key={index} className={classes.pContents}>
                                <img style={{width:"21px", height:"21px"}} src={"/images/map/tempSeven.svg"}/>
                                <span>{ele.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    else{
        return;
    }
}

export default Store
