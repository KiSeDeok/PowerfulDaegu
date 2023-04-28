import classes from "./Load.module.css"
import Recently from "./Content/Recently";
import Store from "./Content/Store";
import Path from "./Content/Path";
import Find from "./Find/Find";
import axios from "axios";
import {useDispatch} from "react-redux";
import {mapActions} from "../../../../store/map/map-slice";

function Load(){
    const dispatch = useDispatch()

    const handleEnter = (e) => {
        if(e.key === "Enter"){
            const opt = {
                url: "https://map.naver.com/v5/api/transit/directions/point-to-point?start=128.576747,35.86287963&goal=128.4928316,35.85892304&mode=TIME&lang=ko&includeDetailOperation=true",
                method: "post",
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }

            axios(opt)
                .then(function a(response) {
                    console.log("asdas")
                    dispatch(mapActions.handleSearch({data : response.data.staticPaths}))
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <div className={classes.box}>
            <div className={classes.searchBox}>
                <div className={classes.startDiv}>
                    <input placeholder={"출발지를 입력하세요."}/>
                </div>
                <div className={classes.endDiv}>
                    <input onKeyDown={(e) => handleEnter(e)} placeholder={"도착지를 입력하세요."}/>
                </div>
                <img className={classes.changeDiv} src={"/images/map/changeBtn.svg"}/>
            </div>

            {/*<div className={classes.funcBox}>*/}
            {/*    <Recently/>*/}
            {/*    <Store />*/}
            {/*    <Path />*/}
            {/*</div>*/}

            <div className={classes.loadBox}>
                <Find />
            </div>
        </div>
    )
}

export default Load
