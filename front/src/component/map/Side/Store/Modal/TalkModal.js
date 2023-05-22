import classes from "./TalkWriteModal.module.css";
import {useState} from "react";
import {mapModalActions} from "../../../../../store/map/modal-slice";
import {useDispatch} from "react-redux";

function TalkModal(){
    const dispatch = useDispatch()
    const [picArr, setPicArr] = useState([])

    // 현장토크 글쓰기
    const handleTalkWriteModal = (e) => {
        e.stopPropagation()
        e.preventDefault()

        dispatch(mapModalActions.handleTalk({open:false, id:""}))
    }

    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.hLeft}>
                    <img />
                    <span>현장 토크 글쓰기</span>
                </div>
                <div className={classes.hRight} onClick={handleTalkWriteModal}>
                    <img src={"/images/map/modalExit.svg"}/>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.bPicBox}>
                    {picArr && picArr.length > 0 ?
                        <div></div>
                        :
                        <div className={classes.bNonPicBox}>
                            <img src={"/images/map/camera.svg"}/>
                            <span>사진을 여기에 끌어다 놓으세요</span>
                            <div className={classes.dnppBox}>
                                <span>파일로 업로드하기</span>
                            </div>
                        </div>
                    }
                </div>
                <div className={classes.bWriteBox}>
                    <textarea className={classes.bwbTextArea} placeholder={"현장에서 느꼈던 모든 이야기를 이곳에 작성해 주세요! \n 무자비한 비방글 및 욕설은 사전에 동의 없이 삭제 될 수 있습니다. "}/>
                </div>
            </div>
            <div className={classes.foot}>
                <div className={classes.fBox}>
                    <span>공유하기</span>
                </div>
            </div>
        </div>
    )
}

export default TalkModal
