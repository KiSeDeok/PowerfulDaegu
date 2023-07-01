import classes from "./Load.module.css"

import {useDispatch, useSelector} from "react-redux";
import {useCookies} from 'react-cookie'

import {mapActions} from "../../../../store/map/map-slice";
import {useEffect, useState} from "react";

import useHttp from "../../../../hooks/use-http";
import Input from "./Input";
import Recently from "./Content/Recently";
import Path from "./Content/Path";
import Store from "./Content/Store";
import Find from "./Find/Find";

function Load(){
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    // style 지정
    const [startFocus, setStartFocus] = useState(false)
    const [endFocus, setEndFocus] = useState(false)

    // 검색어 관련 벨류
    const [inputValue, setInputValue] = useState({start:"", end:""})
    const [position, setPosition] = useState({start:{}, end:{}, startValue:"", endValue:""})

    // 검색 여부
    const [isSearch, setIsSearch] = useState(false)

    // 쿠키 관련
    const [cookies, setCookie, removeCookie] = useCookies(['path']);


    const pageData = useSelector(state => state.map.index)

    useEffect(() => {
        console.log("pageData =" , pageData)

        // 경로검색일 경우
        if(pageData.place?.start && pageData.place?.end){
            setPosition((prev) => ({
                ...prev,
                start: pageData.place.start.point,
                startValue: pageData.place.start.name,
                end: pageData.place.end.point,
                endValue: pageData.place.end.name
            }))

            setInputValue({
                start: pageData.place.start.name,
                end: pageData.place.end.name
            })

            fetchData({url: `http://localhost:3001/maps?start=${pageData.place.start.point}&goal=${pageData.place.end.point}`}, (obj) => {
                console.log("obj= ", obj)
                // redux 값 설정
                dispatch(mapActions.handleSearch({
                    data: {
                        point: {
                                start:pageData.place.start.point,
                                startName:pageData.place.start.name,
                                end:pageData.place.end.point,
                                endName:pageData.place.end.name
                            },
                        data:obj
                        }
                    }))

                // 최근 탐색한 경로 쿠키 설정
                const path = cookies.path || [];
                const newPaths = [...path, {
                    start:pageData.place.start.point,
                    end:pageData.place.end.point,
                    startName:pageData.place.start.name,
                    endName:pageData.place.end.name
                }];

                setCookie("path", newPaths, { path: "/"});
                setIsSearch(true)
            })
        }

        // 출발지점 검색일 경우
        else if(pageData.place?.start){
            const content = pageData.place.start.point.substring(pageData.place.start.point.indexOf("(") + 1, pageData.place.start.point.indexOf(")"));
            const [left, right] = content.split(" ");

            setPosition((prev) => ({
                ...prev,
                start: right+","+left,
                startValue: pageData.place.start.name
            }))

            setInputValue({
                start: pageData.place.start.name,
                end: position.endValue
            })
        }

        // 도착지점 검색일 경우
        else if(pageData.place?.end){
            const content = pageData.place.end.point.substring(pageData.place.end.point.indexOf("(") + 1, pageData.place.end.point.indexOf(")"));
            const [left, right] = content.split(" ");

            setPosition((prev) => ({
                ...prev,
                end: right+","+left,
                endValue: pageData.place.end.name
            }))

            setInputValue({
                start: position.startValue,
                end: pageData.place.end.name
            })
        }
    }, [pageData.place])

    /** 길찾기 인풋 창 포커스 이벤트 */
    const handleStartFocus = (props) => {
        if(props.type === "start"){
            props.is === true ? setStartFocus(true) : setStartFocus(false)
        }
        else if(props.type === "end"){
            props.is === true ? setEndFocus(true) : setEndFocus(false)
        }
    }

    /** 길찾기 시 가게 선택했을 시 이벤트 */
    const handleSearchData = (type, point, name) => {
        if(type === "start"){
            setPosition((prev) => ({
                ...prev,
                start: point,
                startValue: name
            }))

            // 도착지가 있을 경우에는 검색
            if(!(position.end && Object.keys(position.end).length === 0 && position.end.constructor === Object)) {
                fetchData({url: `http://localhost:3001/maps?start=${point}&goal=${position.end}`}, (obj) => {
                    console.log("obj= ", obj)
                    // redux 값 설정
                    dispatch(mapActions.handleSearch({data: {point:{start:point, startName:name, endName:position.endValue, end:position.end}, data:obj}}))

                    // 최근 탐색한 경로 쿠키 설정
                    const path = cookies.path || [];
                    const newPaths = [...path, {start:point, end:position.end, startName:name, endName:position.endValue}];

                    setCookie("path", newPaths, { path: "/"});
                    setIsSearch(true)
                })
            }
        }
        else{
            setPosition((prev) => ({
                ...prev,
                end: point,
                endValue: name
            }))

            // 출발지가 있을 경우에는 검색
            if(!(position.start && Object.keys(position.start).length === 0 && position.start.constructor === Object)){
                fetchData({url: `http://localhost:3001/maps?start=${position.start}&goal=${point}`}, (obj) => {
                    // redux 값 설정
                    dispatch(mapActions.handleSearch({data: {point:{start:position.start, startName:position.startValue, endName:name, end:point}, data:obj}}))

                    // 최근 탐색한 경로 쿠키 설정
                    const path = cookies.path || [];
                    const newPaths = [...path, {start:position.start, end:point, startName:position.startValue, endName:name}];

                    setCookie("path", newPaths, { path: "/"});
                    setIsSearch(true)
                })
            }
        }
    }
    /** 도착지, 목적기 변경 버튼 눌렀을 시 이벤트 */
    const handleChangePlace = () => {
        setPosition({
            start: position.end,
            end: position.start,
            startValue: position.endValue,
            endValue: position.startValue
        })

        setInputValue({
            start: position.endValue,
            end: position.startValue
        })

        if(Object.keys(position.start).length !== 0 && Object.keys(position.end).length !== 0){
            fetchData({url: `http://localhost:3001/maps?start=${position.end}&goal=${position.start}`}, (obj) => {
                dispatch(mapActions.handleSearch({data:obj}))
            })
        }
    }

    return (
        <div className={classes.box}>
            <div className={startFocus || endFocus ? `${classes.searchBox} ${classes.onFocus}` : classes.searchBox}>
                <div className={startFocus ? `${classes.startDiv} ${classes.startFocus}` : classes.startDiv}>
                    <img className={Object.keys(position.start).length !== 0 ? classes.startImg : classes.noImg} src={"/images/map/load/startFlag.svg"}/>
                    <Input value={inputValue.start} keyDown={handleStartFocus} select={handleSearchData} type={"start"}/>
                </div>
                <div className={endFocus ? `${classes.endDiv} ${classes.startFocus}` : classes.endDiv}>
                    <img className={Object.keys(position.end).length !== 0 ? classes.endImg : classes.noImg} src={"/images/map/load/endFlag.svg"}/>
                    <Input value={inputValue.end} keyDown={handleStartFocus} select={handleSearchData} type={"end"}/>
                </div>
                <img onClick={handleChangePlace} className={classes.changeDiv} src={"/images/map/changeBtn.svg"}/>
            </div>
            <div className={classes.loadBox}>
                {isSearch ?
                    <Find />
                    :
                    <>
                        <Recently />
                        <Store />
                        <Path />
                    </>
                }
            </div>
        </div>
    )
}

export default Load
