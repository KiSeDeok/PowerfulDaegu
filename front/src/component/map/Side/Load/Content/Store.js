import classes from "./Store.module.css"

function Store(){
    return (
        <div className={classes.pathBox}>
            <div className={classes.pHead}>
                <div className={classes.phLeft}>
                    <img src={"/images/map/favorite_active.svg"}/>
                    <span>저장한 스토어</span>
                </div>
                <div className={classes.phRight}>
                    <span>저장 관리</span>
                </div>
            </div>
            <div className={classes.pBody}>
                <div className={classes.pContents}>
                    <img src={"/images/map/tempSeven.svg"}/>
                    <span>세븐일레븐 대구대봉점</span>
                </div>
                <div className={classes.pContents}>
                    <img src={"/images/map/tempSeven.svg"}/>
                    <span>남산에</span>
                </div>
                <div className={classes.pContents}>
                    <img src={"/images/map/tempSeven.svg"}/>
                    <span>헤븐트리</span>
                </div>
                <div className={classes.pContents}>
                    <img src={"/images/map/tempSeven.svg"}/>
                    <span>영남대학교</span>
                </div>
            </div>
        </div>
    )
}

export default Store
