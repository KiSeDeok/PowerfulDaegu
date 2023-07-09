import classes from "./Path.module.css"
import Pcontent from "./Pcontent";
import React, {useEffect, useState} from "react";
import TitleModal from "../Modal/TitleModal";
import {useDispatch, useSelector} from "react-redux";
import useHttp from "../../../../../../hooks/use-http";
import FDelete from "../Favorite/FDelete";
import {useCookies} from "react-cookie";

function Path(){
    const [sortModal, setSortModal] = useState({open:false, index:0, text:"최근 저장순"})
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    // 쿠키
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

    // check된 컨텐츠 확인
    const [checkContents, setCheckContents] = useState([])

    // 임시 로딩 확인
    const [tempLoad, setTempLoad] = useState(false)

    // 데이터 로딩 확인
    const [isLoad, setLoad] = useState(false)

    // 전체 체크
    const [isAllCheck, setIsAll] = useState(false)

    const [pathData, setPathData] = useState([])
    const dispatch = useDispatch()

    // 로딩 창
    useEffect(() => {
        setTimeout(() => {
            setTempLoad(true)
        }, 500);
    }, [])

    useEffect(() => {
        getFetchData()
    }, [])

    const getFetchData = () => {
        if(cookies && cookies.access_token) {
            fetchData({url: `http://localhost:3001/store/direction`, type: "get"}, (obj) => {
                console.log("pathData= ", pathData)
                console.log("obj= ", obj)

                if (obj && obj.length > 0) {
                    setPathData(obj)
                } else {
                    setPathData([])
                }
            })
        }

        setCheckContents([])
        setIsAll(false)
        setLoad(true)
    }
    const handleModal = () => {
        const temp = {...sortModal, open: !sortModal.open}
        setSortModal(temp)
    }

    const handleType = (el) => {
        const sTemp = {open:false, index:el.index, text:el.text}
        setSortModal(sTemp)
    }

    const handleAllItem = () => {
        if(isAllCheck){
            setIsAll(false)
            setCheckContents([])
        }
        else{
            setIsAll(true)
            const array = pathData.map((ele) => {return ele.id})
            setCheckContents(array)
        }
    }

    const handleSelectedItem = (id) => {
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
                    <img style={{height:"6px", width:"8px"}} src={"/images/map/saveType/arrow.svg"}/>
                    {sortModal.open ? <TitleModal index={sortModal.index} func={handleType} type={"sort"}/> : ""}
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
            {!tempLoad ?
                <div className={classes.tempLoadBox}>
                    <img src={"/images/map/temp1.gif"}/>
                </div> :
                isLoad ?
                <div className={classes.fBody}>
                    {pathData && pathData.length > 0 ?
                        pathData.map((ele, index) => {
                            return <Pcontent checks={checkContents} key={index} data={ele}
                                             handleItem={handleSelectedItem}/>
                        })
                        :
                        <div className={classes.nofBody}>
                            <img style={{height: "19px", width: "13px"}} src={"/images/map/noSearchImg.svg"}/>
                            <span>저장된 경로가 없어요</span>
                        </div>
                    }
                </div> : ""
            }

            <FDelete data={checkContents} fetch={getFetchData} type={"path"}/>
        </div>
    )
}

export default Path
