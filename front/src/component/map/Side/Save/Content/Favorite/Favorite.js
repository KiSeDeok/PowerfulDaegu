import classes from "./Favorite.module.css"
import Fcontent from "./Fcontent";
import TitleModal from "../Modal/TitleModal";
import React, {useCallback, useEffect, useState} from "react";
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

    // 데이터 로딩 확인
    const [isLoad, setLoad] = useState(false)

    // 전체 체크
    const [isAllCheck, setIsAll] = useState(false)

    // 컨텐츠 저장 및 관리
    const [favoriteData, setFavoriteData] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        getFetchData()
    }, [])

    const getFetchData = () => {
        fetchData({url: `http://localhost:3001/store/like`}, (obj) => {
            if(obj && obj.length > 0) {
                const categoryValues = obj.map((item) => item.store);

                setFavoriteData(categoryValues)
            }
            else{
                setFavoriteData([])
            }

            setCheckContents([])
            setIsAll(false)
            setLoad(true)
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

    const handleAllItem = () => {
        if(isAllCheck){
            setIsAll(false)
            setCheckContents([])
        }
        else{
            setIsAll(true)
            const array = favoriteData.map((ele) => {return ele.id})
            setCheckContents(array)
        }
    }

    const handleSelectedItem = (id) => {
    // const handleSelectedItem = useCallback((id) => {
        const temp = JSON.parse(JSON.stringify(checkContents));
        const index = temp.findIndex(item => item === id); // id값이 있는 요소의 인덱스를 찾습니다.

        if (index !== -1) {
            temp.splice(index, 1); // 해당 인덱스의 요소를 삭제합니다.
        }
        else{
            temp.push(id)
        }

        setCheckContents(temp)
    }
    // }, []);


        return (
            <div className={classes.box}>
                <div className={classes.fHead}>
                    <div className={classes.fhContent} onClick={() => handleModal(0)}>
                        <span>{sortModal.text}</span>
                        <img style={{height: "6px", width: "8px"}} src={"/images/map/saveType/arrow.svg"}/>
                        {sortModal.open ? <TitleModal index={sortModal.index} func={handleType} type={"sort"}/> : ""}
                    </div>
                    <div className={classes.fhContent} onClick={() => handleModal(1)}>
                        <span>{placeModal.text}</span>
                        <img style={{height: "6px", width: "8px"}} src={"/images/map/saveType/arrow.svg"}/>
                        {placeModal.open ? <TitleModal index={placeModal.index} func={handleType} type={"place"}/> : ""}
                    </div>
                    <div className={classes.fhContent} onClick={() => handleModal(2)}>
                        <span>{regionModal.text}</span>
                        <img style={{height: "6px", width: "8px"}} src={"/images/map/saveType/arrow.svg"}/>
                        {regionModal.open ?
                            <TitleModal index={regionModal.index} func={handleType} type={"region"}/> : ""}
                    </div>
                </div>
                <div className={classes.fAllBox}>
                    <div className={classes.faBox} onClick={handleAllItem}>
                        <div className={isAllCheck ? classes.activeCheckbox : classes.defaultCheckbox}>
                            {isAllCheck && <img src={"/images/map/saveType/check.svg"} />}
                        </div>
                        <span>전체</span>
                    </div>
                </div>
                {isLoad ?
                    <div className={favoriteData.length !== 0 ? classes.fBody : `${classes.fBody} ${classes.noCont}`}>
                        {favoriteData && favoriteData.length > 0 ?
                            favoriteData.map((ele, index) => (
                                <Fcontent checks={checkContents} key={index} data={ele}
                                          handleItem={handleSelectedItem}/>
                            ))
                            :
                            <div className={classes.nofBody}>
                                <img style={{height: "19px", width: "13px"}} src={"/images/map/noSearchImg.svg"}/>
                                <span>저장된 스토어가 없어요</span>
                            </div>
                        }
                    </div>

                    : ""
                }
                <FDelete data={checkContents} fetch={getFetchData} type={"favorite"}/>
            </div>
        )

}

export default Favorite
