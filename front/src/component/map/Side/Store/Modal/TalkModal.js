import classes from "./TalkModal.module.css";
import {useState} from "react";
import {mapModalActions} from "../../../../../store/map/modal-slice";
import {useDispatch} from "react-redux";

function TalkModal(){
    const dispatch = useDispatch()
    const [picArr, setPicArr] = useState([])

    const temp = {
        id:0,
        img:["0","1","2"],
        likeNum:300,
        isLike:false,
        content:"돈까스 먹으러 갔는데, 오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ " +
            "ㅠ 에효,,,ㅠㅠ가실분들은 참고하세용 돈까스 먹으러 갔는데, 오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ ㅠ " +
            "에효,,,ㅠㅠ가실분들은 참고하세용 돈까스 먹으러 갔는데, 오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ ㅠ 에효,,," +
            "ㅠㅠ가실분들은 참고하세용돈까스 먹으러 갔는데, 오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ ㅠ 에효,,,ㅠㅠ가실분들은 " +
            "참고하세용돈까스 먹으러 갔는데, 오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ ㅠ 에효,,,ㅠㅠ가실분들은 참고하세용돈까스 먹으러 갔는데, " +
            "오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ ㅠ 에효,,,ㅠㅠ가실분들은 참고하세용돈까스 먹으러 갔는데, 오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ" +
            " ㅠ 에효,,,ㅠㅠ가실분들은 참고하세용돈까스 먹으러 갔는데, 오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ ㅠ 에효,,,ㅠㅠ가실분들은 참고하세용돈까스" +
            " 먹으러 갔는데, 오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ ㅠ 에효,,,ㅠㅠ가실분들은 참고하세용돈까스 먹으러 갔는데, " +
            "오늘 휴업일이었네용~ㅠㅠㅠㅠㅠㅠㅠㅠㅠ ㅠ 에효,,,ㅠㅠ가실분들은 참고하세용"
    }

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
                    <span>현장 토크</span>
                </div>
                <div className={classes.hRight} onClick={handleTalkWriteModal}>
                    <img src={"/images/map/modalExit.svg"}/>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.bLeft}>
                    {temp.img?.length > 0 ?
                        <>
                            <img className={classes.blImgContent} src={"/images/map/tempDonGas.svg"}/>
                            <div className={classes.blImgBox}>
                                <div className={classes.blILeft}><img src={"/images/map/imgArrow_white.svg"}/></div>
                                <div className={classes.blIRight}><img src={"/images/map/imgArrow_white.svg"}/></div>
                            </div>
                        </>
                        :
                        <>
                            <span>no image</span>
                        </>
                    }
                </div>
                <div className={classes.bRight}>
                    <div className={classes.brHead}>
                        <img src={"/images/map/thumbs_hover.svg"}/>
                        <span>{temp.likeNum}</span>
                    </div>
                    <div className={classes.brBody}>
                        {temp.content}
                    </div>
                    <div className={classes.brFoot}>
                        <div className={classes.brfLike}>
                            <div className={classes.brfImg}></div>
                            <span>도움이 됐어요!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.foot}>
                <div className={classes.fBox}>
                    <div className={classes.fbPrev}><img src={"/images/map/imgArrow_black.svg"}/></div>
                    <div className={classes.fbNext}><img src={"/images/map/imgArrow_black.svg"}/></div>
                </div>
            </div>
        </div>
    )
}

export default TalkModal
