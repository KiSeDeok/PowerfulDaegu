import classes from "./OptINF.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {mapActions} from "../../../store/map/map-slice";

function OptINF(){
    const dispatch = useDispatch()
    const map = useSelector(state => state.map.naverMap)

    // 위치 정보 가져오기 mobile test
    const handleOrientation = () => {
        console.log("window.DeviceOrientationEvent= ", window.DeviceOrientationEvent)
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientationChange);
        } else {
            console.error('Device orientation is not supported');
        }

        // 좌표값 가져오기
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;

                    dispatch(mapActions.handleLocation({location:{latitude: latitude, longitude: longitude }}));
                },
                error => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported');
        }
    }

    const handleOrientationChange = event => {
        const { alpha, beta, gamma } = event;
        // alpha: 알파(Azimuth), beta: 베타(Pitch), gamma: 감마(Roll)
        // 방향 정보 처리
        console.log('User direction:', alpha);
    };

    const handleZoomIn = () => {
        if (map) {
            const currentZoom = map.getZoom(); // 현재 줌 레벨 가져오기
            map.setZoom(currentZoom + 1); // 현재 줌 레벨에서 1 증가시켜 줌 인
        }
    };

    const handleZoomOut = () => {
        if (map) {
            const currentZoom = map.getZoom(); // 현재 줌 레벨 가져오기
            map.setZoom(currentZoom - 1); // 현재 줌 레벨에서 1 감소시켜 줌 아웃
        }
    };

    return (
        <div className={classes.optionSet}>
            <div className={classes.favoriteSet}></div>
            <div onClick={handleOrientation} className={classes.locationSet}></div>
            <div className={classes.sizeSet}>
                <div onClick={handleZoomIn} className={classes.plus}></div>
                <div className={classes.centerLine}></div>
                <div onClick={handleZoomOut} className={classes.minus}></div>
            </div>
        </div>
    )
}

export default OptINF