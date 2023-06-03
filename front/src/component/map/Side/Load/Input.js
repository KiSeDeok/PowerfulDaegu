import classes from "./Input.module.css"
import {useEffect, useState} from "react";
import useHttp from "../../../../hooks/use-http";
import {v4 as uuidv4} from "uuid";

function Input(props){
    const { isLoading, error, sendRequest: fetchData } = useHttp();
    const [input, setInput] = useState("")

    const [values, setValue] = useState("")
    const [searchData, setSearchData] = useState([])

    const handleFocus = () =>{
        props.keyDown({is:true, type:props.type === "start" ? "start" : "end"})
    }

    const handleBlur = (e) =>{
        e.stopPropagation()
        e.preventDefault()

        setTimeout(() => {
            props.keyDown({is:false, type:props.type === "start" ? "start" : "end"})
            // // setSearchData([])
        }, 0);
    }

    // 인풋창 글자 입력시 이벤트
    const handleKeyDown = (e) =>{
        const isKorean = /[가-힣]/.test(e.nativeEvent.data);

        if (isKorean || e.nativeEvent.inputType === "deleteContentBackward" && e.target.value !== ""){
            setInput(e.target.value)
            console.log("e.targh = ", e.target.value)

            fetchData({url: `http://localhost:3001/store/search?storename=${e.target.value}&region=&place=`}, (obj) => {

                const filteredData = obj.filter((item, index) => item.name.includes(e.target.value) && item.name.indexOf(e.target.value) === 0);
                console.log("filteredData = ", filteredData)

                if(filteredData.length > 0){
                    setSearchData(filteredData)
                }
                else{
                    setSearchData([false])

                }
            })

        }
        else{
            // setSearchData([])
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSearchClick = (e, data) => {
        e.preventDefault()
        e.stopPropagation()


        const content = data.point.substring(data.point.indexOf("(") + 1, data.point.indexOf(")"));
        const [left, right] = content.split(" ");

        setValue(data.name);
        setSearchData([])

        props.select(props.type, right+","+left, data.name)
        props.keyDown({is:false, type:props.type === "start" ? "start" : "end"})
    }

    useEffect(() => {
        if(props.value) {
            setValue(props.value);
        }
    }, [props.value])

    console.log("searchData= ", searchData)
    return (
        <>
            <input
                onChange={handleChange}
                onInput={(e) => handleKeyDown(e)}
                placeholder={props.type === "start" ? "출발지를 입력하세요." : "도착지를 입력하세요."}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={values}
            />
            <div className={classes.box}>
                {(searchData && searchData.length > 0 && searchData[0] !== false) ?
                    <div className={props.type === "start" ? classes.hasBox : `${classes.hasBox} ${classes.endHasBox}`}>
                        {
                            searchData.map((ele, index) => {
                                return (
                                    <div key={index} onClick={(e) => handleSearchClick(e,ele)} className={classes.eleBox}>
                                        <div className={classes.left}>
                                            <div className={classes.head}>
                                                <img src={ele.favorite ? "/images/map/favorite_active.svg" : "/images/map/load/location.svg"}/>
                                            </div>
                                            <div className={classes.body}>
                                                <div className={classes.bTop}>
                                                    <span>{ele.name ? ele.name.substring(0,input.length) : ""}</span>
                                                    <label>{ele.name ? ele.name.substring(input.length, ele.name.length) : ""}</label>
                                                </div>
                                                <div className={classes.bBottom}>
                                                    <span>{ele.city_name && ele.datail_address ? ele.city_name + ele.detail_address : ""}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.right}>
                                            <span>{ele.store_type ? ele.store_type?.category : ""}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    searchData[0] === false ?
                    <div className={props.type === "start" ? classes.noSearchHasBox : classes.noSearchHasBoxEnd}>
                        <img src={"/images/map/noSearchImg.svg"} />
                        <span>'{input}'에 대한 검색 결과가 없어요</span>
                    </div>
                    :

                    ""
                }
            </div>
        </>
    )
}

export default Input
