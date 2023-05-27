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
import Input from "./Input";

function Load(){
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    const [startFocus, setStartFocus] = useState(false)
    const [endFocus, setEndFocus] = useState(false)

    const [test, setTest] = useState("")

    const handleStartFocus = (props) => {
        if(props.type === "start"){
            props.is === true ? setStartFocus(true) : setStartFocus(false)
        }
        else if(props.type === "end"){
            props.is === true ? setEndFocus(true) : setEndFocus(false)
        }
    }

    const handleOrientat = () => {
        console.log("window.DeviceOrientationEvent= ", window.DeviceOrientationEvent)

        navigator.geolocation.getCurrentPosition(
            (position) => {
                // 위치 정보 가져오기 성공
                const { latitude, longitude } = position.coords;
                console.log('위치:', latitude, longitude);
                alert(22)
            },
            (error) => {
                // 위치 정보 가져오기 실패
                console.error('위치 정보를 가져오는데 실패했습니다:', error);
                alert(error)
            }
        );

        // 방향 권한 요청
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation, false);
        }
    }

    const handleOrientation = (event) => {
        const { alpha, beta, gamma } = event;
        alert(alpha)
        alert(beta)
        alert(gamma)
        console.log('방향:', alpha, beta, gamma);
    };

    return (
        <div className={classes.box}>
            <div className={startFocus || endFocus ? `${classes.searchBox} ${classes.onFocus}` : classes.searchBox}>
                <div className={startFocus ? `${classes.startDiv} ${classes.startFocus}` : classes.startDiv}>
                    <img className={startFocus ? classes.startImg : ""} src={"/images/map/load/startFlag.svg"}/>
                    <Input keyDown={handleStartFocus} type={"start"}/>
                </div>
                <div className={endFocus ? `${classes.endDiv} ${classes.startFocus}` : classes.endDiv}>
                    <img className={endFocus ? classes.endImg : ""} src={"/images/map/load/endFlag.svg"}/>
                    <Input keyDown={handleStartFocus} type={"end"}/>
                </div>
                <img onClick={handleOrientat} className={classes.changeDiv} src={"/images/map/changeBtn.svg"}/>
            </div>
            <div className={classes.loadBox}>
                <Find />
            </div>
        </div>
    )
}

export default Load
