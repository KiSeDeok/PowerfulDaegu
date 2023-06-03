import classes from "./Load.module.css"
import Recently from "./Content/Recently";
import Store from "./Content/Store";
import Path from "./Content/Path";
import Find from "./Find/Find";
import axios from "axios";
import {useDispatch} from "react-redux";
import {mapActions} from "../../../../store/map/map-slice";
import {useEffect, useState} from "react";
import useHttp from "../../../../hooks/use-http";
import Input from "./Input";

function Load(){
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    const [startFocus, setStartFocus] = useState(false)
    const [endFocus, setEndFocus] = useState(false)

    const [position, setPosition] = useState({start:{}, end:{}})

    const handleStartFocus = (props) => {
        if(props.type === "start"){
            props.is === true ? setStartFocus(true) : setStartFocus(false)
        }
        else if(props.type === "end"){
            props.is === true ? setEndFocus(true) : setEndFocus(false)
        }
    }

    const handleSearchData = (type, point) => {

        console.log(position)

        if(type === "start"){

            setPosition((prev) => ({
                ...prev,
                start: point
            }))

            if(!(position.end && Object.keys(position.end).length === 0 && position.end.constructor === Object)) {
                fetchData({url: `http://localhost:3001/maps?start=${point}&goal=${position.end}`}, (obj) => {
                    console.log("obj =", obj)
                    dispatch(mapActions.handleSearch({data:obj}))
                })
            }
        }
        else{
            setPosition((prev) => ({
                ...prev,
                end: point
            }))

            if(!(position.start && Object.keys(position.start).length === 0 && position.start.constructor === Object)){
                fetchData({url: `http://localhost:3001/maps?start=${position.start}&goal=${point}`}, (obj) => {
                    console.log("obj =", obj)
                    dispatch(mapActions.handleSearch({data:obj}))
                })
            }

        }
    }

    return (
        <div className={classes.box}>
            <div className={startFocus || endFocus ? `${classes.searchBox} ${classes.onFocus}` : classes.searchBox}>
                <div className={startFocus ? `${classes.startDiv} ${classes.startFocus}` : classes.startDiv}>
                    <img className={Object.keys(position.start).length !== 0 ? classes.startImg : classes.noImg} src={"/images/map/load/startFlag.svg"}/>
                    <Input keyDown={handleStartFocus} select={handleSearchData} type={"start"}/>
                </div>
                <div className={endFocus ? `${classes.endDiv} ${classes.startFocus}` : classes.endDiv}>
                    <img className={Object.keys(position.end).length !== 0 ? classes.endImg : classes.noImg} src={"/images/map/load/endFlag.svg"}/>
                    <Input keyDown={handleStartFocus} select={handleSearchData} type={"end"}/>
                </div>
                <img className={classes.changeDiv} src={"/images/map/changeBtn.svg"}/>
            </div>
            <div className={classes.loadBox}>
                <Find />
            </div>
        </div>
    )
}

export default Load
