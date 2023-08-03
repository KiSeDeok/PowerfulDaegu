import {useEffect} from "react";

function Mobile(){
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

    }, []);

    return (
        <></>
    )
}
