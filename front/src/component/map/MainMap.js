import classes from "./MainMap.module.css"
import NaverMap from 'react-naver-map';
import {useEffect, useRef, useState} from "react";
import axios from "axios";

const MainMap = () => {
    const mapRef = useRef(null);
    const [directions, setDirections] = useState(null);

    let naverMap = ""

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="gmm1qrjlur"&submodules=geocoder';
        document.head.appendChild(script);
        script.onload = () => {
            naverMap = new window.naver.maps.Map(mapRef.current, {
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
        };
    }, [])

    const getFind = () => {
        const start = '126.977677,37.584723'; // 출발지 입력
        const goal = '127.004126,37.560909'; // 목적지 입력
        const option = ''; // 탐색 옵션 입력

        const clientId = '애플리케이션 등록 시 발급받은 client id 값';
        const clientSecret = '애플리케이션 등록 시 발급받은 client secret 값';

    // 요청 헤더 설정
        const headerData = {
            'X-NCP-APIGW-API-KEY': "oS6wvEtaPKSJ9D4hHNK0gALmuQrnr6vcSzFdLAU3",
            'X-NCP-APIGW-API-KEY-ID': "gmm1qrjlur",
        };

    // 요청 URL 설정
        const url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode`;
        // const url = `https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving?start=127.1058342,37.359708&goal=129.075986,35.179470&option=trafast`;

        const opt = {
            url: url,
            method: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: null,
            headers: headerData
        }

    // GET 요청 보내기
        axios(opt)
            .then(function a(response) {
                console.log("repsasd =", response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const geoCode = () => {
        const apiUrl = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode';
        const query = '분당구 불정로 6';
        const coordinate = '127.1054328,37.3595963';
        const clientId = 'gmm1qrjlur';
        const clientSecret = 'oS6wvEtaPKSJ9D4hHNK0gALmuQrnr6vcSzFdLAU3';

        const config = {
            headers: {
                'X-NCP-APIGW-API-KEY-ID': clientId,
                'X-NCP-APIGW-API-KEY': clientSecret
            },
            params: {
                query: query,
                coordinate: coordinate
            }
        };

        // GET 요청 보내기
        axios.get(apiUrl, config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving', {
                params: {
                    start: '126.977677,37.584723',
                    goal: '127.004126,37.560909',
                },
                headers: {
                    'X-NCP-APIGW-API-KEY-ID': 'gmm1qrjlur',
                    'X-NCP-APIGW-API-KEY': 'hxJA1aF04b7vqc7YTKPnDqa0wS5vZSxsXEvmvVo1',
                },
            });

            setDirections(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <div
                id="map"
                style={{ width: '100%', height: '400px' }}
                ref={mapRef}
            />
            <button onClick={fetchData}>길찾기</button>
        </div>
    );
};

export default MainMap
