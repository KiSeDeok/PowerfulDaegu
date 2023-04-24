import classes from "./Load.module.css"
import Recently from "./Content/Recently";
import Store from "./Content/Store";
import Path from "./Content/Path";
import Find from "./Find/Find";

function Load(){
    return (
        <div className={classes.box}>
            <div className={classes.searchBox}>
                <div className={classes.startDiv}>
                    <input placeholder={"출발지를 입력하세요."}/>
                </div>
                <div className={classes.endDiv}>
                    <input placeholder={"도착지를 입력하세요."}/>
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
