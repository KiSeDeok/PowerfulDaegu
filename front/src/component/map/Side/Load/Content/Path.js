import classes from "./Path.module.css"
import {useEffect, useState} from "react";
import useHttp from "../../../../../hooks/use-http";
import {mapActions} from "../../../../../store/map/map-slice";
import {useDispatch} from "react-redux";

function Path(){
    const dispatch = useDispatch()

    const [data, setData] = useState([])
    const [isLoad, setLoad] = useState(false)
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    useEffect(() => {
        getFetchData()
    }, [])

    const getFetchData = () => {
        fetchData({url: `http://localhost:3001/store/direction`}, (obj) => {
            if(obj && obj.length > 0) {
                console.log("oboj = ", obj)
                setData(obj)
            }
            else{
                setData([])
            }

            setLoad(true)
        })
    }

    const handlePageIndex = () => {
        dispatch(mapActions.handleIndex({index: {num: 3}}))
    }

    const handleDelete = (element) => {
        fetchData({url: `http://localhost:3001/store/direction`, type: "delete", data: {id: element.id}}, (obj) => {
            getFetchData()
        })
    }

    const handleClick = (element) => {
        const sPoint = element.url.match(/start=(.*?)&/)?.[1];
        const gPoint = element.url.match(/goal=(.*)/)?.[1];

        dispatch(mapActions.handleIndex({index: {
            place: {
                start:{name:element.start, point:sPoint},
                end:{name:element.goal, point:gPoint}},
                num: 1
        }}))

    }

    return (
        <div className={classes.pathBox}>
            <div className={classes.pHead}>
                <div className={classes.phLeft}>
                    <img style={{width:"18px", height:"17px"}} src={"/images/map/favorite_active.svg"}/>
                    <span>저장한 경로</span>
                </div>
                <div onClick={handlePageIndex} className={classes.phRight}>
                    <span>저장 관리</span>
                </div>
            </div>
            <div className={classes.rBody}>
                {data && data.length > 0 ? data.map((ele, index) => {
                     return (
                         <div onClick={() => handleClick(ele)} key={index} className={classes.rContents}>
                             <img style={{width:"16px", height:"17px"}} className={classes.reFImg} src={"/images/map/destination_default.svg"}/>
                             <div className={classes.rcBody}>
                                 <span>{ele.start}</span>
                                 <img style={{width:"11px", height:"17px"}} src={"/images/map/arrow.svg"}/>
                                 <label>{ele.goal}</label>
                             </div>
                             {/*<img onClick={() => handleDelete(ele)} className={classes.reSImg} src={"/images/map/x.svg"}/>*/}
                         </div>
                     )})
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default Path
