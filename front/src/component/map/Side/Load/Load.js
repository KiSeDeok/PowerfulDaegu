import classes from "./Load.module.css"
import Recently from "./Content/Recently";
import Store from "./Content/Store";
import Path from "./Content/Path";
import Find from "./Find/Find";
import axios from "axios";
import {useDispatch} from "react-redux";
import {mapActions} from "../../../../store/map/map-slice";
import {useEffect, useState} from "react";
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

    useEffect(() => {
        // package.json에 저장
        /*    "start": "HTTPS=true SSL_CRT_FILE=~/cert/cert.pem SSL_KEY_FILE=~/cert/key.pem react-scripts start",*/
        /** Safari가 13+ 버전 이상인지 체크 **/
        const handleOrientationChange = event => {
            const { alpha, beta, gamma } = event;
            // 방향 정보 처리
        };

        const isSafariOver13 = window.DeviceOrientationEvent !== undefined &&  typeof window.DeviceOrientationEvent.requestPermission === 'function'
        if (isSafariOver13) {
            window.DeviceMotionEvent.requestPermission()
                .then((state) => {
                    if (state === 'granted') {
                        /** 모션 이벤트 권한 허용을 눌렀을때 **/

                        window.addEventListener('deviceorientation', handleOrientationChange);
                    } else if (state === 'denied'){
                        /** 모션 이벤트 권한 취소를 눌렀을때 **/
                        /** Safari 브라우저를 종료하고 다시 접속하도록 유도하는 UX 화면 필요 **/
                    }
                })
                .catch(e => {
                    console.error(e)
                })
        } else {
            window.addEventListener('deviceorientation', handleOrientationChange);
        }


        // if (window.DeviceOrientationEvent) {
        //     alert("hi")
        //     window.addEventListener('deviceorientation', handleOrientationChange);
        // } else {
        //     console.error('Device orientation is not supported');
        // }
        //
        // return () => {
        //     window.removeEventListener('deviceorientation', handleOrientationChange);
        // };
    }, []);

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
                <img className={classes.changeDiv} src={"/images/map/changeBtn.svg"}/>
            </div>
            <div className={classes.loadBox}>
                <Find />
            </div>
        </div>
    )
}

export default Load
