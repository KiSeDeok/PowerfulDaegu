import classes from "./SearchModal.module.css";
import {useState} from "react";

function SearchModal(props){
    const [onIndex, setIndex] = useState(props.index)

    const handleIndex = (ele) => {
        const temp = [...onIndex]

        if(onIndex.includes(ele)){
            const index = temp.indexOf(ele)

            temp.splice(index,1)
            setIndex(temp)
        }
        else{
            temp.push(ele)
            setIndex(temp)
        }

        props.setIndex(temp)
    }

    const handleReset = () => {
        setIndex([])
    }

    return (

        <div className={props.isSearchSet ? classes.activeSearchDiv : classes.noSearchDiv} >
            {props.isSearchSet ?
                <>
                <div className={classes.sHead} onClick={handleReset}><img src={"/images/map/return.svg"}/></div>
                <div className={classes.sBody}>
                    <div className={classes.ssHead}><span>지역</span></div>
                    <div className={classes.ssBody}>
                        <div>
                            <div className={onIndex.includes(0) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(0)}><span>중구</span></div>
                            <div className={onIndex.includes(1) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(1)}><span>동구</span></div>
                            <div className={onIndex.includes(2) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(2)}><span>북구</span></div>
                            <div className={onIndex.includes(3) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(3)}><span>남구</span></div>
                            <div className={onIndex.includes(4) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(4)}><span>서구</span></div>
                        </div>
                        <div>
                            <div className={onIndex.includes(5) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(5)}><span>수성구</span></div>
                            <div className={onIndex.includes(6) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(6)}><span>달서구</span></div>
                            <div className={onIndex.includes(7) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(7)}><span>달성군</span></div>
                        </div>
                    </div>
                    <div className={classes.ssHead}><span>장소</span></div>
                    <div className={classes.ssBody}>
                        <div>
                            <div className={onIndex.includes(8) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(8)}><span>음식점</span></div>
                            <div className={onIndex.includes(9) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(9)}><span>편의점</span></div>
                            <div className={onIndex.includes(10) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(10)}><span>푸드 코트</span></div>
                        </div>
                        <div>
                            <div className={onIndex.includes(11) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(11)}><span>지역 아동센터</span></div>
                            <div className={onIndex.includes(12) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(12)}><span>주민 센터</span></div>
                            <div className={onIndex.includes(13) ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleIndex(13)}><span>사회 복지관</span></div>
                        </div>
                    </div>
                </div>
                <div className={classes.sfoot}>
                    <div className={classes.sfootBody} onClick={() => props.setOpen()}>
                        <img src={"/images/map/topArrow.svg"} />
                    </div>
                </div>
                </>
                :  ""
            }
        </div>
    )
}

export default SearchModal
