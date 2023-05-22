import classes from "./MapInterface.module.css"
import {useState} from "react";
import {mapModalActions} from "../../store/map/modal-slice";
import {useDispatch} from "react-redux";

function MapInterface() {
    const dispatch = useDispatch()
    const [profileModal, setProfileModal] = useState(false)

    // 프로필 모달 생성
    const handleProfileModal = () => {
        const temp = profileModal
        setProfileModal(!temp)
    }

    // 컬러풀 카드 이건 안돼요 모달 생성
    const handleWarningModal = () => {
        dispatch(mapModalActions.handleWarning({open:true}))
    }

    return (
        <div className={classes.box}>
            <div className={classes.topLeftBox}>
                <div className={classes.tlBox} onClick={handleWarningModal}>
                    <span>컬러풀 카드, 이건 안돼요! 😭</span>
                </div>
                <div className={classes.tlBox}>
                    <span>급식카드 신청하기 👍🏼</span>
                </div>
            </div>
            <div className={classes.topRightBox} onClick={handleProfileModal}>
                <div className={classes.trBox}>
                    <img src={"/images/map/mapProfile.svg"} />
                </div>
            </div>
            {profileModal ?
            <div className={classes.trModalBox}>
                <div className={classes.trmBox}><span>지정한 장소</span></div>
                <div className={classes.trmBox}><span>현장 토크</span></div>
                <div className={classes.trmBox}><span>프로필 수정</span></div>
                <div className={classes.trmBox}><span>1:1 문의</span></div>
                <div className={classes.trmBox}><span>로그아웃</span></div>
                <div className={classes.triangleBox}></div>
            </div>
                : ""
            }
            <div className={classes.bottomCenter}>
                <div className={classes.bcBox}>
                    <img src={"/images/map/mapRefresh.svg"}/>
                    <span>현 지도에서 검색</span>
                </div>
            </div>
        </div>
    )
}

export default MapInterface
