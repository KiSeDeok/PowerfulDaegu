import classes from "./TitleModal.module.css"
import {useEffect, useState} from "react";

function TitleModal(props){
    const [open, setOpen] = useState(false)

    useEffect(()=> {
        setOpen(true)
    }, [])

    const dataSet = {
        sort:[
            {name:"최근 저장순", index:0},
            {name:"이름순", index:1},
        ],
        place:[
            {name:"장소 전체", index:0},
            {name:"한식", index:1},
            {name:"중식", index:2},
            {name:"양식", index:3},
            {name:"일식", index:4},
            {name:"분식", index:5},
            {name:"아시안", index:6},
            {name:"편의점", index:7}
        ],
        region:[
            {name:"지역 전체", index:0},
            {name:"중구", index:1},
            {name:"동구", index:2},
            {name:"북구", index:3},
            {name:"남구", index:4},
            {name:"서구", index:5},
            {name:"수성구", index:6},
            {name:"달서구", index:7},
            {name:"달성군", index:8},
        ]
    }

    const typeSet = props.type === "sort" ?
        dataSet.sort : props.type === "place" ?
            dataSet.place : dataSet.region

    const handleClick = (e, el) => {
        e.stopPropagation()
        e.preventDefault()

        props.func({type:props.type, text:el.name, index:el.index})
    }

    return (
        <div className={open ? classes.openBox : classes.closeBox}>
            {
                typeSet.map((ele, index) => (
                    <div className={classes.content} onClick={(e) => handleClick(e,ele)}>
                        <span className={props.index === index ? classes.activeSpan : ""}>{ele.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default TitleModal
