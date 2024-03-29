import classes from "./SearchModal.module.css";
import {useState} from "react";

function SearchModal(props){
    const [onRegion, setRegion] = useState(props.region)
    const [onType, setType] = useState(props.type)

    const handleRegion = (ele) => {
        const temp = [...onRegion]

        if(onRegion.includes(ele)){
            const index = temp.indexOf(ele)

            temp.splice(index,1)
            setRegion(temp)
        }
        else{
            temp.push(ele)
            setRegion(temp)
        }

        props.setRegion(temp)
    }

    const handleType = (ele) => {
        const temp = [...onType]

        if(onType.includes(ele)){
            const index = temp.indexOf(ele)

            temp.splice(index,1)
            setType(temp)
        }
        else{
            temp.push(ele)
            setType(temp)
        }

        props.setType(temp)
    }

    const handleReset = () => {
        setRegion([])
        setType([])
    }

    return (

        <div className={props.isSearchSet ? classes.activeSearchDiv : classes.noSearchDiv} >
            {props.isSearchSet ?
                <>
                <div className={classes.sHead} onClick={handleReset}><img style={{width:"20px", height:"20px"}} src={"/images/map/return.svg"}/></div>
                <div className={classes.sBody}>
                    <div className={classes.ssHead}><span>지역</span></div>
                    <div className={classes.ssBody}>
                        <div>
                            <div className={onRegion.includes("중구") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleRegion("중구")}><span>중구</span></div>
                            <div className={onRegion.includes("동구") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleRegion("동구")}><span>동구</span></div>
                            <div className={onRegion.includes("북구") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleRegion("북구")}><span>북구</span></div>
                            <div className={onRegion.includes("남구") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleRegion("남구")}><span>남구</span></div>
                            <div className={onRegion.includes("서구") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleRegion("서구")}><span>서구</span></div>
                        </div>
                        <div>
                            <div className={onRegion.includes("수성구") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleRegion("수성구")}><span>수성구</span></div>
                            <div className={onRegion.includes("달서구") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleRegion("달서구")}><span>달서구</span></div>
                            <div className={onRegion.includes("달성군") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleRegion("달성군")}><span>달성군</span></div>
                        </div>
                    </div>
                    <div className={classes.ssHead}><span>장소</span></div>
                    <div className={classes.ssBody}>
                        <div>
                            <div className={onType.includes("한식") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleType("한식")}><span>한식</span></div>
                            <div className={onType.includes("중식") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleType("중식")}><span>중식</span></div>
                            <div className={onType.includes("양식") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleType("양식")}><span>양식</span></div>
                            <div className={onType.includes("일식") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleType("일식")}><span>일식</span></div>
                            <div className={onType.includes("분식") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleType("분식")}><span>분식</span></div>
                        </div>
                        <div>
                            <div className={onType.includes("아시안") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleType("아시안")}><span>아시안</span></div>
                            <div className={onType.includes("편의점") ? classes.ssActiveItem : classes.ssItem}
                                 onClick={() => handleType("편의점")}><span>편의점</span></div>
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
