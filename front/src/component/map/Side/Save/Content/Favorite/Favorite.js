import classes from "./Favorite.module.css"
import Fcontent from "./Fcontent";
import TitleModal from "../Modal/TitleModal";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import FDelete from "./FDelete";
import {useDispatch, useSelector} from "react-redux";
import useHttp from "../../../../../../hooks/use-http";
import {userActions} from "../../../../../../store/map/user-slice";

function Favorite(){
    const [sortModal, setSortModal] = useState({open:false, index:0, text:"최근 저장순"})
    const [placeModal, setPlaceModal] = useState({open:false, index:0, text:"장소 전체"})
    const [regionModal, setRegionModal] = useState({open:false, index:0, text:"지역 전체"})
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    // check된 컨텐츠 확인
    const [checkContents, setCheckContents] = useState([])

    // 컨텐츠 저장 및 관리
    const favoriteData = useSelector(state => state.user.favorite)
    const dispatch = useDispatch()

    // temp 저장 데이터
    const tempArr = [
        {
            id:0,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:1,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:2,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:3,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:4,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:5,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:6,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:7,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:8,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:9,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:10,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:11,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:12,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:13,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:14,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:15,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
        {
            id:16,
            name:"세븐일레븐 대구대구점",
            type:"편의점"
        },
    ]

    useEffect(() => {
        getFetchData()
    }, [])

    const getFetchData = () => {
        fetchData({url: `http://localhost:3001/store/like`}, (obj) => {
            console.log("obj = ", obj)
            if(obj.store) {
                dispatch(userActions.handleFavorite({favorite: obj.store}))
            }
        })
    }
    const handleModal = (index) => {
        if(index === 0){
            const temp = {...sortModal, open: !sortModal.open}
            setSortModal(temp)
        }
        if(index === 1){
            const temp = {...placeModal, open: !placeModal.open}
            setPlaceModal(temp)
        }
        if(index === 2){
            const temp = {...regionModal, open: !regionModal.open}
            setRegionModal(temp)
        }
    }

    const handleType = (el) => {
        switch (el.type){
            case "sort":
                const sTemp = {open:false, index:el.index, text:el.text}
                setSortModal(sTemp)
                break;
            case "place":
                const pTemp = {open:false, index:el.index, text:el.text}
                setPlaceModal(pTemp)
                break;
            case "region":
                const rTemp = {open:false, index:el.index, text:el.text}
                setRegionModal(rTemp)
                break;
            default:
                break;
        }
    }

    return (
        <div className={classes.box}>
            <div className={classes.fHead}>
                <div className={classes.fhContent} onClick={() => handleModal(0)}>
                    <span>{sortModal.text}</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                    {sortModal.open ? <TitleModal index={sortModal.index} func={handleType} type={"sort"}/> : ""}
                </div>
                <div className={classes.fhContent} onClick={() => handleModal(1)}>
                    <span>{placeModal.text}</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                    {placeModal.open ? <TitleModal index={placeModal.index} func={handleType} type={"place"}/> : ""}
                </div>
                <div className={classes.fhContent} onClick={() => handleModal(2)}>
                    <span>{regionModal.text}</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                    {regionModal.open ? <TitleModal index={regionModal.index} func={handleType} type={"region"}/> : ""}
                </div>
            </div>
            <div className={classes.fBody}>
                {favoriteData && favoriteData.length > 0 ?
                    favoriteData.map((ele) => {
                        return <Fcontent key={uuidv4()} data={ele}/>
                    })
                    :
                    <div className={classes.nofBody}>
                        <img src={"/images/map/noSearchImg.svg"}/>
                        <span>저장된 스토어가 없어요</span>
                    </div>
                }
            </div>
            <FDelete/>
        </div>
    )
}

export default Favorite
