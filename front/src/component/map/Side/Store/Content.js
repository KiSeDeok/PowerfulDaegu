import classes from "./Content.module.css";
import {useRef, useState} from "react";

function Content(props){
    const data = props.data

    // 목적지 이벤트
    const [isDn, setDn] = useState(false)

    // 시작, 종료 지점
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    // 즐겨찾기 목록
    const [isFavorite, setFavorite] = useState(data.favorite ? true : false)

    // 컨텐츠 active 여부
    const [isActive, setActive] = useState(false)
    const addContentRef = useRef()

    const handleDestinationOpt = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if(isDn){
            setDn(false)
        }
        else{
            setDn(true)
        }
    }

    const handleFavorite = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if(isFavorite){
            setFavorite(false)
        }
        else{
            setFavorite(true)
        }
    }

    const handleStartPoint = (e) =>{
        e.preventDefault()
        e.stopPropagation()

        if(start) {
            setStart("")
        }
        else{
            setStart(data.startP)
        }
    }

    const handleEndPoint = (e) =>{
        e.preventDefault()
        e.stopPropagation()

        if(end){
            setEnd("")
        }
        else {
            setEnd(data.endP)
        }
    }

    const handleIsActive = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const temp = isActive

        setActive(!temp)

        if(temp) {
            setTimeout(() => {
                addContentRef.current.querySelectorAll('*').forEach(element => {
                    element.style.maxHeight = '0';
                });
            }, 400)
        }
        else{
            console.log("asdas")
            addContentRef.current.querySelectorAll('*').forEach(element => {
                element.style.maxHeight = '100%';
            });
        }
    }

    return (
        <div className={isActive ? classes.contentActive : classes.content} onClick={(e) => handleIsActive(e)}>
            <div className={classes.mainContent}>
                <div className={classes.left}>
                    <div className={classes.titleDiv}>
                        <span>{data.title}</span>
                        <label>{data.type}</label>
                    </div>
                    <div className={classes.typesDiv}>
                        {true && <div className={classes.open}><span>영업 중</span></div>}
                        {data.point[0].has && <div className={classes.delivery}><span>배달º포장</span></div>}
                        {data.point[1].has && <div className={classes.nice}><img src={"/images/map/goodShop.svg"}/><span>선한영향력가게</span></div>}
                    </div>
                    <div className={classes.addressDiv}>
                        <img src={"/images/map/address.svg"}/>
                        <div>
                            <div className={classes.address}>
                                <span>{data.address.doro}</span>
                                <label>{data.address.upyen}</label>
                            </div>
                            <span className={classes.jibun}>{data.address.jibun}</span>
                        </div>
                    </div>
                    <div className={classes.timeDiv}>
                        <img src={"/images/map/time.svg"}/>
                        <span>11:00 ~ 19:00</span>
                    </div>
                    <div className={classes.phoneDiv}>
                        <img src={"/images/map/phone.svg"}/>
                        <span>{data.phone}</span>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={isDn ? classes.destinationActiveDiv : classes.destinationDiv} onClick={(e) => handleDestinationOpt(e)}>
                        <div className={isDn ? classes.destinationActive : classes.destinationDefault}>
                           <span onClick={handleStartPoint} className={start ? classes.activeSpan : ""}>출발</span>
                           <span>|</span>
                           <span onClick={handleEndPoint} className={end ? classes.activeSpan : ""}>도착</span>
                        </div>
                        <div className={isDn ? classes.destinationActiveDiv : classes.destinationDiv}>
                            <img src={isDn ? "/images/map/destination_active.svg" : "/images/map/destination_default.svg"}/>
                        </div>
                    </div>
                    <div className={isFavorite ? classes.activeFavoriteDiv : classes.favoriteDiv} onClick={(e) => handleFavorite(e)}>
                        <img src={isFavorite ? "/images/map/favorite_active.svg" : "/images/map/favorite_default.svg"}/>
                    </div>
                </div>
            </div>
            <div ref={addContentRef} className={isActive ? classes.addActiveContent : classes.addContent}>
                <div className={isActive ? classes.contentActiveSet : classes.contentSet}>
                    <div className={classes.menu}>
                        <div className={classes.menuTop}><span>메뉴</span></div>
                        <div className={classes.menuContents}>
                            <div className={classes.menuContent}>
                                <span>자연산 참가자미 모둠(1인)</span>
                                <div className={classes.dotDiv}></div>
                                <label>25,000</label>
                            </div>
                            <div className={classes.menuContent}>
                                <span>도다리 세꼬시, 대방어 (1인)</span>
                                <div className={classes.dotDiv}></div>
                                <label>35,000</label>
                            </div>
                            <div className={classes.menuContent}>
                                <span>줄가자미 (1인)</span>
                                <div className={classes.dotDiv}></div>
                                <label>48,000</label>
                            </div>
                            <div className={classes.menuContent}>
                                <span>물회</span>
                                <div className={classes.dotDiv}></div>
                                <label>23,000</label>
                            </div>
                            <div className={classes.menuContent}>
                                <span>공기밥</span>
                                <div className={classes.dotDiv}></div>
                                <label>2,000</label>
                            </div>
                            <div className={classes.menuContent}>
                                <span>어린이 돈가스</span>
                                <div className={classes.dotDiv}></div>
                                <label>5,000</label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.talk}>
                        <div className={classes.talkTop}><span>현장 토크</span></div>
                        <div className={classes.talkContents}>
                            <div className={classes.talkContent}>
                                <img/>
                            </div>
                            <div className={classes.talkContent}>
                                <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                            </div>
                            <div className={classes.talkContent}>
                                <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                            </div>
                            <div className={classes.talkContent}>
                                <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                            </div>
                            <div className={classes.talkContent}>
                                <span>돈까스 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리 치킨도 먹고싶어용가리</span>
                            </div>

                        </div>
                        <div className={classes.talkWriteDiv}>
                            <div className={classes.writeDiv}>
                                <img src={"/images/map/writePencil.svg"}/>
                                <span>현장토크 글쓰기</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.functionSet}>
                        <div className={classes.functionDiv}>
                            <img src={"/images/map/share_default.svg"}/>
                        </div>
                        <div className={classes.functionDiv}>
                            <img src={"/images/map/destination_default.svg"}/>
                        </div>
                        <div className={classes.functionDiv}>
                            <img src={"/images/map/favorite_default.svg"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
