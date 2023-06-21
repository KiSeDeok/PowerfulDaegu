import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Fcontent from "./Fcontent";
import TitleModal from "../Modal/TitleModal";
import FDelete from "./FDelete";
import useHttp from "../../../../../../hooks/use-http";
import classes from "./Favorite.module.css"

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
    const [filteredData, setFilterData] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        getFetchData()
    }, [])

    /** 데이터 가져오기*/
    const getFetchData = () => {
        fetchData({url: `http://localhost:3001/store/like`}, (obj) => {
            if(obj && obj.length > 0) {
                const categoryValues = obj.map((item) => {
                    console.log("item =", item)
                    return {...item.store, createdAt:item.createdAt}
                });
                // 원본 데이터 설정
                setFavoriteData(categoryValues)

                console.log("categoryValues = ", categoryValues)

                // 데이터 필터링
                handleSetType("",categoryValues)
            }
            else{
                setFavoriteData([])
            }

            setCheckContents([])
            setIsAll(false)
            setLoad(true)
        })
    }

    /** 데이터 필터링*/
    const handleSetType = (el,values) => {
        const nowSort = el && el.type === "sort" ? {open:false, index:el.index, text:el.text} : sortModal
        const nowPlace = el && el.type === "place" ? {open:false, index:el.index, text:el.text} : placeModal
        const nowRegion = el && el.type === "region" ? {open:false, index:el.index, text:el.text} : regionModal

        const allData = favoriteData.length > 0 ? favoriteData : values

        const filterData = allData.map((ele) => {
            // 정규식 추출
            const stringRegx = /대구\s+(중구|서구|달성군|달서구|북구|남구|동구|수성구)/;
            const placeRegex = new RegExp(nowPlace.text)

            // 장소와 지역 필터링
            if(nowPlace.index !== 0 && nowRegion.index !== 0){
                // 매치 여부
                const isRegionMatch = ele.city_name.match(stringRegx)
                return isRegionMatch[1] === nowRegion.text && placeRegex.test(ele.store_type.category) && ele
            }

            if(nowPlace.index !== 0){
                return placeRegex.test(ele.store_type.category) && ele
            }

            if(nowRegion.index !== 0){
                const isRegionMatch = ele.city_name.match(stringRegx)
                return isRegionMatch[1] === nowRegion.text && ele
            }

            if(nowPlace.index === 0 && nowRegion.index === 0){
                return ele
            }
        }).filter(Boolean).sort((a,b) => {
            // 정렬 타입 설정
            if(nowSort.index === 0){
                return a.createAt - b.createAt
            }
            else if(nowSort.index === 1){
                return a.name.localeCompare(b.name);
            }
            else{
                return a.createAt - b.createAt
            }
        });

        setFilterData(filterData)
    }

    /** 필터 모달 on/off */
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

    /** 데이터 필터링 옵션*/
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

        handleSetType(el)
    }

    /** 데이터 전체 선택 및 해지 */
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

    /** 데이터 선택 이벤트 */
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
                <div className={filteredData.length !== 0 ? classes.fBody : `${classes.fBody} ${classes.noCont}`}>
                    {filteredData && filteredData.length > 0 ?
                        filteredData.map((ele, index) => (
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
