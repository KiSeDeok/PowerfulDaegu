import classes from "./MainMap.module.css"
import NaverMap, {Overlay} from 'react-naver-map';
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import CustomOverlay from "./CustomOverlay";
import {mapActions} from "../../store/map/map-slice";



const MainMap = () => {
    const dispatch = useDispatch()
    const mapRef = useRef(null);
    const [loading, setLoading] = useState(false)

    const polyline = useSelector(state => state.map.polyline)

    const [naverMap, setNaverMap] = useState("")
    const [polylineData, setPolylineData] = useState("")

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="gmm1qrjlur"&submodules=geocoder';
        document.head.appendChild(script);
        script.onload = () => {
            const map = new window.naver.maps.Map(mapRef.current, {
                center: new window.naver.maps.LatLng(35.8441357,128.6208248),
                zoom: 13
            })

            setNaverMap(map)
            dispatch(mapActions.handleNaverMap({naverMap:map}))
            setLoading(true)

        };
    }, [])

    useEffect(()=>{
        if(loading && polyline.data) {
            // 기존 폴리라인 제거
            if(polylineData && polylineData.length > 0){
                polylineData.map((ele) => ele.setMap(null))
            }

            const polyArray = []

            if(polyline.type === "transfort") {
                polyline.data.map((poly) => {

                    // 좌표 데이터 형식 변경
                    const pointSet = poly.points.map((ele) => {
                        return new window.naver.maps.LatLng(ele.y, ele.x)
                    }).filter(Boolean);

                    // type="WALKING"일 경우 좌표 데이터
                    const walkSet = poly?.walkpath?.legs[0]?.steps.flatMap((ele, index) => {
                        if (ele.path) {
                            const dataArray = ele.path.split(' ');
                            const result = dataArray.map(item => item.split(','));

                            const temp = result.map((el, index) => {
                                return new window.naver.maps.LatLng(el[1], el[0]);
                            });

                            return [new window.naver.maps.LatLng(ele.lat, ele.lng), ...temp];
                        } else {
                            return new window.naver.maps.LatLng(ele.lat, ele.lng);
                        }
                    }).filter(Boolean);

                    // Polyline 생성
                    const polylineOpt = new window.naver.maps.Polyline({
                        map: naverMap,
                        path: poly.walkpath ? walkSet : pointSet,
                        strokeColor: poly.type === "WALKING" ? '#303030' : '#FF7D00',
                        strokeStyle: poly.type === "WALKING" ? "shortdot" : "solid",
                        strokeLineCap: "round",
                        strokeWeight: 4
                    })

                    polyArray.push(polylineOpt)
                })
            }

            if(polyline.type === "car"){
                const data = polyline.data.map((ele) => {
                    return window.naver.maps.LatLng(ele[1], ele[0])
                }).filter(Boolean);


                const polylineOpt = new window.naver.maps.Polyline({
                    map: naverMap,
                    path: data,
                    strokeColor: '#FF7D00',
                    strokeStyle: "solid",
                    strokeLineCap: "round",
                    strokeWeight: 4
                })

                polyArray.push(polylineOpt)
            }

            if(polyline.type === "walk"){
                const data = polyline.data.map((ele) => {
                    return window.naver.maps.LatLng(ele.lat, ele.lng)
                }).filter(Boolean);

                const walkSet = polyline.data.flatMap((ele, index) => {
                    if (ele.path) {
                        const dataArray = ele.path.split(' ');
                        const result = dataArray.map(item => item.split(','));

                        const temp = result.map((el, index) => {
                            return new window.naver.maps.LatLng(el[1], el[0]);
                        });

                        return [new window.naver.maps.LatLng(ele.lat, ele.lng), ...temp];
                    } else {
                        return new window.naver.maps.LatLng(ele.lat, ele.lng);
                    }
                }).filter(Boolean);

                const polylineOpt = new window.naver.maps.Polyline({
                    map: naverMap,
                    path: walkSet,
                    strokeColor: '#FF7D00',
                    strokeStyle: "solid",
                    strokeLineCap: "round",
                    strokeWeight: 4
                })

                polyArray.push(polylineOpt)

                console.log("data= ", data)
            }

            console.log("polyline =", polyline)

            setPolylineData(polyArray)

            if(polyArray) {
                naverMap.panTo(polyline.type === "transfort" ? polyline.data[0]?.points[0] : polyline.data[0])
            }
        }

    }, [polyline, naverMap])


    return (
        <div>
            <div
                id="map"
                style={{ width: '100%', height: '100vh' }}
                ref={mapRef}
            />
            {loading && naverMap && (
                <>
                <CustomOverlay position={new window.naver.maps.LatLng(35.8441357, 128.6208248)}/>
                {/*<CustomOverlay position={new window.naver.maps.LatLng(35.8441357, 128.6208248)} map={naverMap} />*/}
                </>
            )}
        </div>
    );
};

export default MainMap
