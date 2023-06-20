import classes from "./Find.module.css"
import {useEffect, useState} from "react";
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
    const [isFavorite, setFavorite] = useState({type:false, id:""})

    console.log("searchData= ", searchData)

    useEffect(()=> {
        getDirection()

    }, [])

    const getDirection = () => {
        setFavorite({type:false, id:""})

        fetchData({url: `http://localhost:3001/store/direction`, type:"get"}, (obj) => {
            console.log("obj = ", obj)
            obj.map((ele) => {
                if(ele.start === searchData.point.startName && ele.goal === searchData.point.endName){
                    setFavorite({type:true, id:ele.id})
                }
            })
        })
    }

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
                    setFavorite({type:false, id:""})
                }
            })
        }
    }

    const handleFavorite = () => {
        if(isFavorite.type){
            fetchData({url: `http://localhost:3001/store/direction`, type: "delete", data: {id: isFavorite.id}}, (obj) => {
                getDirection()
            })
        }

        else {
            const address = `http://localhost:3001/maps?start=${searchData.point.start}&goal=${searchData.point.end}`

            fetchData({
                url: `http://localhost:3001/store/direction`,
                type: "post",
                data: {url: address, start: searchData.point.startName, goal: searchData.point.endName}
            }, (obj) => {
                getDirection()
            })
        }
    }

    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.headBox}>
                    <div className={classes.hbContent} onClick={() => handleIndex(0)}>
                        <img style={{height:"21px", width:"20px"}} src={index === 0 ? "/images/map/load/drive_active.svg" : "/images/map/load/drive_default.svg"}/>
                    </div>
                    <div className={classes.hbContent} onClick={() => handleIndex(1)}>
                        <img style={{height:"22px", width:"22px"} }src={index === 1 ? "/images/map/load/bus_active.svg" : "/images/map/load/bus_default.svg"}/>
                    </div>
                    <div className={classes.hbContent} onClick={() => handleIndex(2)}>
                        <img style={{height:"22px", width:"18px"}} src={index === 2 ? "/images/map/load/walk_active.svg" : "/images/map/load/walk_default.svg"}/>
                    </div>
                    <div className={classes.hbColor} style={{left: `${index === 0 ? "0px" : index === 1 ? "48px" : "96px"}`}}></div>
                </div>
                <div className={classes.optBox}>
                    <div className={classes.hrBox}>
                        <img src={"/images/map/share_default.svg"}/>
                    </div>
                    <div onClick={handleFavorite} className={isFavorite.type ? `${classes.hrBox} ${classes.favorite}` : classes.hrBox}>
                        <img src={isFavorite.type ? "/images/map/favorite_active.svg" : "/images/map/star.svg"}/>
                    </div>
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
