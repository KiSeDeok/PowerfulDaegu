import classes from "./Favorite.module.css"
import Fcontent from "./Fcontent";
import TitleModal from "./Modal/TitleModal";
import {useState} from "react";

function Favorite(){
    const [sortModal, setSortModal] = useState({open:false, index:0, text:"최근 저장순"})
    const [placeModal, setPlaceModal] = useState({open:false, index:0, text:"장소 전체"})
    const [regionModal, setRegionModal] = useState({open:false, index:0, text:"지역 전체"})

    const handleModal = (index) => {
        if(index === 0){
            const temp = {...sortModal, open: !sortModal.open}
            setSortModal(temp)
        }
        if(index === 1){
            const temp = {...placeModal, open: !placeModal.open}
            setPlaceModal(temp)
        }
        if(index === 2){
            const temp = {...regionModal, open: !regionModal.open}
            setRegionModal(temp)
        }
    }

    const handleType = (el) => {
        switch (el.type){
            case "sort":
                const sTemp = {open:false, index:el.index, text:el.text}
                setSortModal(sTemp)
                break;
            case "place":
                const pTemp = {open:false, index:el.index, text:el.text}
                setPlaceModal(pTemp)
                break;
            case "region":
                const rTemp = {open:false, index:el.index, text:el.text}
                setRegionModal(rTemp)
                break;
            default:
                break;
        }
    }

    return (
        <div className={classes.box}>
            <div className={classes.fHead}>
                <div className={classes.fhContent} onClick={() => handleModal(0)}>
                    <span>{sortModal.text}</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                    {sortModal.open ? <TitleModal index={sortModal.index} func={handleType} type={"sort"}/> : ""}
                </div>
                <div className={classes.fhContent} onClick={() => handleModal(1)}>
                    <span>{placeModal.text}</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                    {placeModal.open ? <TitleModal index={sortModal.index} func={handleType} type={"place"}/> : ""}
                </div>
                <div className={classes.fhContent} onClick={() => handleModal(2)}>
                    <span>{regionModal.text}</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                    {regionModal.open ? <TitleModal index={sortModal.index} func={handleType} type={"region"}/> : ""}
                </div>
            </div>
            <div className={classes.fBody}>
                <Fcontent/>
            </div>
        </div>
    )
}

export default Favorite