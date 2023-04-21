import classes from "./Path.module.css"
import Pcontent from "./Pcontent";
import {useState} from "react";
import TitleModal from "../Modal/TitleModal";

function Path(){
    const [sortModal, setSortModal] = useState({open:false, index:0, text:"최근 저장순"})
    const handleModal = () => {
        const temp = {...sortModal, open: !sortModal.open}
        setSortModal(temp)
    }

    const handleType = (el) => {
        const sTemp = {open:false, index:el.index, text:el.text}
        setSortModal(sTemp)
    }

    return (
        <div className={classes.box}>
            <div className={classes.fHead}>
                <div className={classes.fhContent} onClick={() => handleModal(0)}>
                    <span>{sortModal.text}</span>
                    <img src={"/images/map/saveType/arrow.svg"}/>
                    {sortModal.open ? <TitleModal index={sortModal.index} func={handleType} type={"sort"}/> : ""}
                </div>
            </div>
            <div className={classes.fBody}>
                <Pcontent/>
            </div>
        </div>
    )
}

export default Path