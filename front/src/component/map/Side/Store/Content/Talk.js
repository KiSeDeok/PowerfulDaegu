import classes from "./Talk.module.css";
import {mapModalActions} from "../../../../../store/map/modal-slice";
import {useDispatch} from "react-redux";

function Talk(props){
    const dispatch = useDispatch()

    // 현장토크 글쓰기
    const handleTalkWriteModal = (e) => {
        e.stopPropagation()
        e.preventDefault()

        dispatch(mapModalActions.handleTalkWrite({open:true, id: props.data.id}))
    }

    // 현장토크 자세히 보기
    const handleTalkModal = (e, ele) => {
        e.stopPropagation()
        e.preventDefault()

        console.log("Asdas")

        dispatch(mapModalActions.handleTalk({open:true, id: ele.id}))
    }

    return (
        <div className={classes.talk}>
            <div className={classes.talkTop}><span>현장 토크</span></div>
            {
                !props.data.menu ?
                    <div className={classes.talkContents}>
                        <div className={classes.talkContent} onClick={(e) => handleTalkModal(e,{id:0})}>
                            <img/>
                        </div>
                        <div className={classes.talkContent} onClick={(e) => handleTalkModal(e,{id:0})}>
                            <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                        </div>
                        <div className={classes.talkContent} onClick={(e) => handleTalkModal(e,{id:0})}>
                            <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                        </div>
                        <div className={classes.talkContent} onClick={(e) => handleTalkModal(e,{id:0})}>
                            <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                        </div>
                        <div className={classes.talkContent} onClick={(e) => handleTalkModal(e,{id:0})}>
                            <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                        </div>

                    </div> :
                    <div className={classes.noTalkDiv}>
                        <img src={"/images/map/noMenu.svg"}/>
                        <span>등록된 현장토크가 없어요</span>
                    </div>
            }
            <div className={classes.talkWriteDiv}>
                <div className={classes.writeDiv} onClick={(e) => handleTalkWriteModal(e)}>
                    <img src={"/images/map/writePencil.svg"}/>
                    <span>현장토크 글쓰기</span>
                </div>
            </div>
        </div>
    )
}

export default Talk
