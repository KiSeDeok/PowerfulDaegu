import classes from "./MainMap.module.css"
import NaverMap from 'react-naver-map';
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const MainMap = () => {
    const mapRef = useRef(null);
    const [directions, setDirections] = useState(null);
    const [loading, setLoading] = useState(false)

    const polyline = useSelector(state => state.map.polyline)

    const [naverMap, setNaverMap] = useState("")
    const [polylineData, setPolylineData] = useState("")

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="gmm1qrjlur"&submodules=geocoder';
        document.head.appendChild(script);
        script.onload = () => {
            setNaverMap(new window.naver.maps.Map(mapRef.current, {
                center: new window.naver.maps.LatLng(35.8441357,128.6208248),
                zoom: 13
            }))

            setLoading(true)
        };
    }, [])

    useEffect(()=>{
        if(loading) {

            // 기존 폴리라인 제거
            if(polylineData){
                polylineData.setMap(null);
            }

            // 좌표 데이터 형식 변경
            const asd = polyline.map((ele) => {
                return new window.naver.maps.LatLng(ele.y, ele.x)
            })

            setPolylineData(new window.naver.maps.Polyline({
                map: naverMap,
                path: asd,
                strokeColor: '#5347AA',
                strokeWeight: 6
            }))
        }

    }, [polyline])

    return (
        <div>
            <div
                id="map"
                style={{ width: '100%', height: '100vh' }}
                ref={mapRef}
            />
        </div>
    );
};

export default MainMap
