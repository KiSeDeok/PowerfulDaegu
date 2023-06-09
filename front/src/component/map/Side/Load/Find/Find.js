import classes from "./Find.module.css"
import {useState} from "react";
import {useSelector} from "react-redux";
import Transfort from "./Type/Transfort";
import Car from "./Type/Car";
import {v4 as uuidv4} from "uuid";
import {mapActions} from "../../../../../store/map/map-slice";
import useHttp from "../../../../../hooks/use-http";
import Walk from "./Type/Walk";

function Find(){
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    const [index, setIndex] = useState(0)
    const searchData = useSelector(state => state.map.searchData)
    const [carData, setCarData] = useState([])
    const [walkData, setWalkData] = useState([])

    console.log("searchData= ", searchData)

    const handleIndex= (index) => {
        setIndex(index)

        if(index == 1) {
            fetchData({url: `http://localhost:3001/maps/car?start=${searchData.point.start}&goal=${searchData.point.end}`}, (obj) => {
                if(obj.route && Object.keys(obj.route).length !== 0 ){
                    const dataArray = [];

                    for (const key in obj.route) {
                        const values = obj.route[key];
                        dataArray.push(...values);
                    }
                    setCarData(dataArray)
                }
            })
        }

        if(index == 2) {
            fetchData({url: `http://localhost:3001/maps/walk?start=${searchData.point.start}&goal=${searchData.point.end}`}, (obj) => {
                if(obj.routes && obj.routes.length > 0) {
                    setWalkData(obj.routes)
                }
            })
        }

    }

    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.headBox}>
                    <div className={classes.hbContent} onClick={() => handleIndex(0)}>
                        <img src={index === 0 ? "/images/map/load/drive_active.svg" : "/images/map/load/drive_default.svg"}/>
                    </div>
                    <div className={classes.hbContent} onClick={() => handleIndex(1)}>
                        <img src={index === 1 ? "/images/map/load/bus_active.svg" : "/images/map/load/bus_default.svg"}/>
                    </div>
                    <div className={classes.hbContent} onClick={() => handleIndex(2)}>
                        <img src={index === 2 ? "/images/map/load/walk_active.svg" : "/images/map/load/walk_default.svg"}/>
                    </div>
                    <div className={classes.hbColor} style={{left: `${index === 0 ? "0px" : index === 1 ? "48px" : "96px"}`}} ></div>
                </div>
            </div>
            <div className={classes.body}>
                {index === 0 ?
                    searchData.data ? searchData.data.paths ? searchData.data.paths.map((ele) => (
                        <Transfort key={uuidv4()} data={ele} address={searchData.point}/>
                    )) : searchData.data.staticPaths && searchData.data.staticPaths.map((ele) => (
                        <Transfort key={uuidv4()} data={ele} address={searchData.point}/>
                    )) : ""
                : index === 1 ?
                    carData && carData.length > 0 ? carData.map((ele)=> (<Car key={uuidv4()} data={ele} address={`http://localhost:3001/maps/car?start=${searchData.point.start}&goal=${searchData.point.end}`}/>)) : ""
                :
                    walkData && walkData.length > 0 ? walkData.map((ele)=> (<Walk key={uuidv4()} data={ele} address={`http://localhost:3001/maps/walk?start=${searchData.point.start}&goal=${searchData.point.end}`}/>)) : ""
                }
            </div>
        </div>
    )
}

export default Find
