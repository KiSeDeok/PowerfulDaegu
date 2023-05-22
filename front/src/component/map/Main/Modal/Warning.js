import classes from "./Warning.module.css"
import {mapModalActions} from "../../../../store/map/modal-slice";
import {useDispatch} from "react-redux";

function Warning(){
    const dispatch = useDispatch()

    // 주의 모달 끄기
    const handleWarningModal = (e) => {
        e.stopPropagation()
        e.preventDefault()

        dispatch(mapModalActions.handleWarning({open:false}))
    }

    return (
        <div className={classes.box}>
            <div className={classes.mainBox}>
                <div className={classes.head}>
                    <img onClick={handleWarningModal} src={"/images/map/modalExit.svg"}/>
                </div>
                <div className={classes.body}>
                    <div className={classes.contentTop}>
                        <span>컬러풀 카드 이건 안돼요! 😭</span>
                    </div>
                    <div className={classes.contentMiddle}>
                        <span>편의점을 이용하는 경우!</span>
                        <label>아동의 신체발달을 고려하여, 영양가 있는 도시락등 식사종류를 <br/>
                            지원하기 위해 제한되는 구매 품목이 있어요.</label>
                    </div>
                    <div className={classes.contentBottom}>
                        <div className={classes.cbContent}>
                            <div className={classes.cbcHead}><span>유해품목</span></div>
                            <div className={classes.cbcBody}>
                                <ul>
                                    <li>주류, 담배 등 아동청소년 판매 금지 품목</li>
                                    <li>아동의 건강에 유해한 고카페인 함유 음료 <br/>
                                        (커피, 에너지 음료등), 탄산음료(콜라, 사이다 등) <br/>
                                        고카페인 커피우유는 커피로 분류되어 구매 불가</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.cbContent}>
                            <div className={classes.cbcHead}><span>간식류</span></div>
                            <div className={classes.cbcBody}>
                                <ul>
                                    <li>과자류, 초콜릿, 사탕, 빙과류 등 <br/>
                                        식사로 볼 수 없는 간식</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.cbContent}>
                            <div className={classes.cbcHead}><span>기타</span></div>
                            <div className={classes.cbcBody}>
                                <ul>
                                    <li>안주류, 조미류(간장 등 양념종류)</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.cbContent}>
                            <div className={classes.cbcHead}><span>비식품</span></div>
                            <div className={classes.cbcBody}>
                                <ul>
                                    <li>생활용품, 학용품, 기타 소품 등 아동급식과 <br/>
                                        관련 없는 물품</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Warning
