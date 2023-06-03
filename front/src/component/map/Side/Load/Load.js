import classes from "./Load.module.css"
import Find from "./Find/Find";
import {useDispatch, useSelector} from "react-redux";
import {mapActions} from "../../../../store/map/map-slice";
import {useEffect, useState} from "react";
import useHttp from "../../../../hooks/use-http";
import Input from "./Input";

function Load(){
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest: fetchData } = useHttp();
    const [startFocus, setStartFocus] = useState(false)
    const [endFocus, setEndFocus] = useState(false)
    const [inputValue, setInputValue] = useState({start:"", end:""})
    const [position, setPosition] = useState({start:{}, end:{}, startValue:"", endValue:""})

    const pageData = useSelector(state => state.map.index)

    useEffect(() => {
        if(pageData.place?.start){
            const content = pageData.place.start.point.substring(pageData.place.start.point.indexOf("(") + 1, pageData.place.start.point.indexOf(")"));
            const [left, right] = content.split(" ");

            setPosition((prev) => ({
                ...prev,
                start: right+","+left,
                startValue: pageData.place.start.name
            }))

            setInputValue({
                start: pageData.place.start.name,
                end: position.endValue
            })
        }
        else if(pageData.place?.end){
            const content = pageData.place.end.point.substring(pageData.place.end.point.indexOf("(") + 1, pageData.place.end.point.indexOf(")"));
            const [left, right] = content.split(" ");

            setPosition((prev) => ({
                ...prev,
                end: right+","+left,
                endValue: pageData.place.end.name
            }))

            setInputValue({
                start: position.startValue,
                end: pageData.place.end.name
            })
        }

    }, [pageData.place])

    /** 길찾기 인풋 창 포커스 이벤트 */
    const handleStartFocus = (props) => {
        if(props.type === "start"){
            props.is === true ? setStartFocus(true) : setStartFocus(false)
        }
        else if(props.type === "end"){
            props.is === true ? setEndFocus(true) : setEndFocus(false)
        }
    }

    /** 길찾기 시 가게 선택했을 시 이벤트 */
    const handleSearchData = (type, point, name) => {
        if(type === "start"){
            setPosition((prev) => ({
                ...prev,
                start: point,
                startValue: name
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
                end: point,
                endValue: name
            }))

            if(!(position.start && Object.keys(position.start).length === 0 && position.start.constructor === Object)){
                fetchData({url: `http://localhost:3001/maps?start=${position.start}&goal=${point}`}, (obj) => {
                    console.log("obj =", obj)
                    dispatch(mapActions.handleSearch({data:obj}))
                })
            }
        }
    }
    /** 도착지, 목적기 변경 버튼 눌렀을 시 이벤트 */
    const handleChangePlace = () => {
        setPosition({
            start: position.end,
            end: position.start,
            startValue: position.endValue,
            endValue: position.startValue
        })

        setInputValue({
            start: position.endValue,
            end: position.startValue
        })

        if(Object.keys(position.start).length !== 0 && Object.keys(position.end).length !== 0){
            fetchData({url: `http://localhost:3001/maps?start=${position.end}&goal=${position.start}`}, (obj) => {
                dispatch(mapActions.handleSearch({data:obj}))
            })
        }
    }

    return (
        <div className={classes.box}>
            <div className={startFocus || endFocus ? `${classes.searchBox} ${classes.onFocus}` : classes.searchBox}>
                <div className={startFocus ? `${classes.startDiv} ${classes.startFocus}` : classes.startDiv}>
                    <img className={Object.keys(position.start).length !== 0 ? classes.startImg : classes.noImg} src={"/images/map/load/startFlag.svg"}/>
                    <Input value={inputValue.start} keyDown={handleStartFocus} select={handleSearchData} type={"start"}/>
                </div>
                <div className={endFocus ? `${classes.endDiv} ${classes.startFocus}` : classes.endDiv}>
                    <img className={Object.keys(position.end).length !== 0 ? classes.endImg : classes.noImg} src={"/images/map/load/endFlag.svg"}/>
                    <Input value={inputValue.end} keyDown={handleStartFocus} select={handleSearchData} type={"end"}/>
                </div>
                <img onClick={handleChangePlace} className={classes.changeDiv} src={"/images/map/changeBtn.svg"}/>
            </div>
            <div className={classes.loadBox}>
                <Find />
            </div>
        </div>
    )
}

export default Load
