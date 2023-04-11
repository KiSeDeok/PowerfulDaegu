import classes from "./MainMap.module.css"
import NaverMap from 'react-naver-map';
import {useEffect, useRef} from "react";

const MainMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="gmm1qrjlur"&submodules=geocoder';
        document.head.appendChild(script);
        script.onload = () => {
            const naverMap = new window.naver.maps.Map(mapRef.current, {
                center: new window.naver.maps.LatLng(37.3700065, 127.121359),
                zoom: 13
            });

            const polyline = new window.naver.maps.Polyline({
                map: naverMap,
                path: [
                    new window.naver.maps.LatLng(37.365620929135716, 127.1036195755005),
                    new window.naver.maps.LatLng(37.365620929135716, 127.11353302001953),
                    new window.naver.maps.LatLng(37.3606921307849, 127.10452079772949),
                    new window.naver.maps.LatLng(37.36821310838941, 127.10814714431763),
                    new window.naver.maps.LatLng(37.360760351656545, 127.11299657821654),
                    new window.naver.maps.LatLng(37.365620929135716, 127.1036195755005)

                ],
                strokeColor: '#5347AA',
                strokeWeight: 2
            });

            // window.naver.maps.Event.addListener(naverMap, 'click', function(e) {
            //     const point = e.latlng;
            //     const path = polyline.getPath();
            //     path.push(point);
            //
            //     new window.naver.maps.Marker({
            //         map: naverMap,
            //         position: point
            //     });
            // });
        };
    }, []);

    return (
        <div>
            <div
                id="map"
                style={{ width: '100%', height: '400px' }}
                ref={mapRef}
            />
        </div>
    );
};

export default MainMap
