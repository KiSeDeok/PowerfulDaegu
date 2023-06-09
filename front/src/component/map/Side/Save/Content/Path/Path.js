import classes from "./Path.module.css"
import Pcontent from "./Pcontent";
import {useEffect, useState} from "react";
import TitleModal from "../Modal/TitleModal";
import {useDispatch, useSelector} from "react-redux";
import useHttp from "../../../../../../hooks/use-http";

function Path(){
    const [sortModal, setSortModal] = useState({open:false, index:0, text:"최근 저장순"})
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    // 컨텐츠 저장 및 관리

    const [pathData, setPathData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        getFetchData()
    }, [])

    const getFetchData = () => {
        fetchData({url: `http://localhost:3001/store/direction`, type:"get"}, (obj) => {
            console.log("obj = ", obj)
            // dispatch(userActions.handleFavorite({favorite:obj}))
        })
    }
    const handleModal = () => {
        const temp = {...sortModal, open: !sortModal.open}
        setSortModal(temp)
    }

    const handleType = (el) => {
        const sTemp = {open:false, index:el.index, text:el.text}
        setSortModal(sTemp)
    }


    return (
        <div className={classes.box}>
            <div className={classes.fHead}>
                <div className={classes.fhContent} onClick={() => handleModal(0)}>
                    <span>{sortModal.text}</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                    {sortModal.open ? <TitleModal index={sortModal.index} func={handleType} type={"sort"}/> : ""}
                </div>
            </div>
            <div className={classes.fBody}>
                {pathData && pathData.length > 0 ?
                    <Pcontent/>
                    :
                    <div className={classes.nofBody}>
                        <img src={"/images/map/noSearchImg.svg"}/>
                        <span>저장된 스토어가 없어요</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Path