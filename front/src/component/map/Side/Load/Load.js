import classes from "./Load.module.css"
import Recently from "./Content/Recently";
import Store from "./Content/Store";
import Path from "./Content/Path";
import Find from "./Find/Find";
import axios from "axios";
import {useDispatch} from "react-redux";
import {mapActions} from "../../../../store/map/map-slice";
import {useState} from "react";
import useHttp from "../../../../hooks/use-http";

function Load(){
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    const [startFocus, setStartFocus] = useState(false)
    const [endFocus, setEndFocus] = useState(false)

    const handleEnter = (e) => {
        if(e.key === "Enter"){
            // 도착지 설정

            // 맵 데이터 가져오기
            fetchData({url: `http://localhost:3001/store/search?storename="한나식빵"`}, (obj) => {
                console.log("obj = ", obj)
            })

            // const opt = {
            //     url: "https://map.naver.com/v5/api/transit/directions/point-to-point?start=128.582351,35.8642161&goal=128.560192,35.9303298&mode=TIME&lang=ko&includeDetailOperation=true",
            //     method: "post",
            //     contentType: "application/json; charset=utf-8",
            //     dataType: "json"
            // }
            //
            // axios(opt)
            //     .then(function a(response) {
            //         console.log("response =", response)
            //         // 맵 목적지 설정
            //         dispatch(mapActions.handleDestination({data : e.target.value}))
            //
            //         // 맵 데이터 설정
            //         dispatch(mapActions.handleSearch({data : response.data.paths.length !== 0 ? response.data.paths : response.data.staticPaths}))
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        }
    }

    const handleStartFocus = () => {
        // 시작지점 포커스
        setStartFocus(true)
    }

    const handleStartBlur = () => {
        // 시작지점 블러
        setStartFocus(false)
    }

    const handleEndFocus = () => {
        // 도착지점 포커스
        setEndFocus(true)
    }

    const handleEndBlur = () => {
        // 도착지점 블러
        setEndFocus(false)
    }


    return (
        <div className={classes.box}>
            <div className={startFocus || endFocus ? `${classes.searchBox} ${classes.onFocus}` : classes.searchBox}>
                <div className={startFocus ? `${classes.startDiv} ${classes.startFocus}` : classes.startDiv}>
                    <img className={startFocus ? classes.startImg : ""} src={"/images/map/load/startFlag.svg"}/>
                    <input
                        placeholder={"출발지를 입력하세요."}
                        onFocus={handleStartFocus}
                        onBlur={handleStartBlur}
                    />
                </div>
                <div className={endFocus ? `${classes.endDiv} ${classes.startFocus}` : classes.endDiv}>
                    <img className={endFocus ? classes.endImg : ""} src={"/images/map/load/endFlag.svg"}/>
                    <input
                        onKeyDown={(e) => handleEnter(e)}
                        placeholder={"도착지를 입력하세요."}
                        onFocus={handleEndFocus}
                        onBlur={handleEndBlur}
                    />
                </div>
                <img className={classes.changeDiv} src={"/images/map/changeBtn.svg"}/>
            </div>

            {/*<div className={classes.funcBox}>*/}
            {/*    <Recently/>*/}
            {/*    <Store />*/}
            {/*    <Path />*/}
            {/*</div>*/}

            <div className={classes.loadBox}>
                <Find />
            </div>
        </div>
    )
}

export default Load
