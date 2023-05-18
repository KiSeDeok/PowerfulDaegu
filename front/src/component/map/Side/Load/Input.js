import classes from "./Input.module.css"
import {useState} from "react";

function Input(props){
    const [data, setIsData] = useState([])
    const [input, setInput] = useState("")

    const tempData = [
        {
            name: "세븐일레븐 황금점",
            favorite: true,
            address: "대구광역시 수성구 수성로길",
            type: "편의점",
            location:{
                x:128.582351,
                y:35.8642161
            }
        },
        {
            name: "세븐일레븐 실버점",
            favorite: true,
            address: "대구광역시 수성구 수성로로 53길",
            type: "편의점",
            location:{
                x:128.582351,
                y:35.8642161
            }
        },
        {
            name: "세븐일레븐 동점",
            favorite: false,
            address: "대구광역시 수성구 성로 53길",
            type: "편의점",
            location:{
                x:128.582351,
                y:35.8642161
            }
        },
        {
            name: "세븐일레븐 점점",
            favorite: false,
            address: "대구광역시 수성구 청로 3길",
            type: "편의점",
            location:{
                x:128.582351,
                y:35.8642161
            }
        },
        {
            name: "세븐일레븐 저점",
            favorite: false,
            address: "대구광역시 수성로 53길",
            type: "편의점",
            location:{
                x:128.582351,
                y:35.8642161
            }
        },
        {
            name: "세븐일레븐 고점",
            favorite: false,
            address: "대구광역시 서구 5길",
            type: "편의점",
            location:{
                x:128.582351,
                y:35.8642161
            }
        },
        {
            name: "세븐일레븐 오점",
            favorite: false,
            address: "대구광역시 수성구 수성로 53길",
            type: "편의점",
            location:{
                x:128.582351,
                y:35.8642161
            }
        }
    ]

    const handleFocus = () =>{
        props.keyDown({is:true, type:props.type === "start" ? "start" : "end"})
    }

    const handleBlur = () =>{
        props.keyDown({is:false, type:props.type === "start" ? "start" : "end"})
        setIsData([])

    }

    const handleKeyDown = (e) =>{

        console.log("e = ", e.keyCode)



        const isKorean = /[가-힣]/.test(e.nativeEvent.data);

        console.log("isKorean= ", isKorean)


        if (isKorean){
            const filteredData = tempData.filter(data => data.name.includes(e.target.value));
            setIsData(filteredData)
            setInput(e.target.value)
        }
    }

    return (
        <>
            <input
                onInput={(e) => handleKeyDown(e)}
                placeholder={"출발지를 입력하세요."}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <div className={classes.box}>
                {data && data.length > 0 ?
                    <div className={classes.hasBox}>
                        {
                            data.map((ele) => {
                                return (
                                    <div className={classes.eleBox}>

                                        <div className={classes.left}>
                                            <div className={classes.head}>
                                                <img src={ele.favorite ? "/images/map/favorite_active.svg" : "/images/map/load/location.svg"}/>
                                            </div>
                                            <div className={classes.body}>
                                                <div className={classes.bTop}>
                                                    <span>{ele.name.substring(0,input.length)}</span>
                                                    <label>{ele.name.substring(input.length, ele.name.length)}</label>
                                                </div>
                                                <div className={classes.bBottom}>
                                                    <span>{ele.address}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.right}>
                                            <span>{ele.type}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className={classes.nonHasBox}>

                    </div>
                }
            </div>
        </>
    )
}

export default Input
