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
            if(polylineData && polylineData.length > 0){
                polylineData.map((ele) => ele.setMap(null))
            }

            const polyArray = []

            polyline.map((poly) => {

                // 좌표 데이터 형식 변경
                const pointSet = poly.points.map((ele) => {
                    return new window.naver.maps.LatLng(ele.y, ele.x)
                })

                // 폴리라인 생성
                const polylineOpt = new window.naver.maps.Polyline({
                    map: naverMap,
                    path: pointSet,
                    strokeColor: poly.type === "WALKING" ? '#303030' :'#FF7D00',
                    strokeStyle:  poly.type === "WALKING" ? "shortdot" : "solid",
                    strokeLineCap: "round",
                    strokeWeight: 4
                })

                polyArray.push(polylineOpt)
            })

            setPolylineData(polyArray)

            if(polyArray) {
                naverMap.panTo(polyline[0]?.points[0])
            }
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
