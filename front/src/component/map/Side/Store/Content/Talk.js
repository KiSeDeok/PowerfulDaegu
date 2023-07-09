import classes from "./Talk.module.css";
import {mapModalActions} from "../../../../../store/map/modal-slice";
import {useDispatch} from "react-redux";
import {useEffect, useRef, useState} from "react";

function Talk(props){
    const dispatch = useDispatch()
    const contentRef = useRef(null);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(true);

    useEffect(() => {
        if (contentRef.current) {
            console.log("isLeftVisible= ", isLeftVisible)
            console.log("isRightVisible= ", isRightVisible)
            contentRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleScroll = () => {
        if (contentRef.current) {
            const scrollLeft = contentRef.current.scrollLeft;
            const maxScrollLeft = contentRef.current.scrollWidth - contentRef.current.clientWidth;

            console.log("scrollLeft= ", scrollLeft)
            console.log("maxScrollLeft= ", maxScrollLeft)

            setIsLeftVisible(scrollLeft > 0); // 왼쪽으로 스크롤 가능한 경우에만 왼쪽 버튼 보여주기
            setIsRightVisible(scrollLeft < maxScrollLeft && scrollLeft+1 < maxScrollLeft); // 오른쪽으로 스크롤 가능한 경우에만 오른쪽 버튼 보여주기
        }
    };

    const scrollLeft = (e) => {
        e.stopPropagation()
        e.preventDefault()

        if (contentRef.current) {
            contentRef.current.scrollLeft -= 200; // 왼쪽으로 200px 스크롤 이동
        }
    };

    const scrollRight = (e) => {
        e.stopPropagation()
        e.preventDefault()

        if (contentRef.current) {
            contentRef.current.scrollLeft += 200; // 오른쪽으로 200px 스크롤 이동
        }
    };

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

        dispatch(mapModalActions.handleTalk({open:true, id: ele.id}))
    }

    return (
        <div className={classes.talk}>
            <div className={classes.talkTop}><span>현장 토크</span></div>
            {
                !props.data.menu ?
                    <div className={classes.talkContents} ref={contentRef}>
                        {isLeftVisible && <div className={classes.leftArrow} onClick={scrollLeft}>
                            <img src={"/images/map/talkArrow.png"}/>
                        </div>}
                        {isRightVisible && <div className={classes.rightArrow} onClick={scrollRight}>
                            <img src={"/images/map/talkArrow.png"}/>
                        </div>}
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
                        <div className={classes.talkContent} onClick={(e) => handleTalkModal(e,{id:0})}>
                            <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                        </div>
                    </div> :
                    <div className={classes.noTalkDiv}>
                        <img style={{width:"18px", height:"25px"}} src={"/images/map/noMenu.svg"}/>
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
