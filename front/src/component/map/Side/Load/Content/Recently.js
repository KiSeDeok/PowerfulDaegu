import classes from "./Recently.module.css"

function Recently(){
    return (
        <div className={classes.recentlyBox}>
            <div className={classes.rHead}>
                <img src={"/images/map/destination_color.svg"}/>
                <span>최근 탐색한 경로</span>
            </div>
            <div className={classes.rBody}>
                <div className={classes.rContents}>
                    <img className={classes.reFImg} src={"/images/map/destination_default.svg"}/>
                    <div className={classes.rcBody}>
                        <span>세븐일레븐 대구대봉점</span>
                        <img src={"/images/map/arrow.svg"}/>
                        <label>황금역 대구3호선</label>
                    </div>
                    <img className={classes.reSImg} src={"/images/map/x.svg"}/>
                </div>
                <div className={classes.rContents}>
                    <img className={classes.reFImg} src={"/images/map/destination_default.svg"}/>
                    <div className={classes.rcBody}>
                        <span>세븐일레븐 대구대봉점라라라로로로로롤랄랄랄</span>
                        <img src={"/images/map/arrow.svg"}/>
                        <label>황금역 대구3호선입니다라라라라랄라로로로로로</label>
                    </div>
                    <img className={classes.reSImg} src={"/images/map/x.svg"}/>
                </div>
                <div className={classes.rContents}>
                    <img className={classes.reFImg} src={"/images/map/destination_default.svg"}/>
                    <div className={classes.rcBody}>
                        <span>세븐일레븐 대구대봉점</span>
                        <img src={"/images/map/arrow.svg"}/>
                        <label>황금역 대구3호선</label>
                    </div>
                    <img className={classes.reSImg} src={"/images/map/x.svg"}/>
                </div>
                <div className={classes.rContents}>
                    <img className={classes.reFImg} src={"/images/map/destination_default.svg"}/>
                    <div className={classes.rcBody}>
                        <span>세븐일레븐 대구대봉점</span>
                        <img src={"/images/map/arrow.svg"}/>
                        <label>황금역 대구3호선</label>
                    </div>
                    <img className={classes.reSImg} src={"/images/map/x.svg"}/>
                </div>
                <div className={classes.rContents}>
                    <img className={classes.reFImg} src={"/images/map/destination_default.svg"}/>
                    <div className={classes.rcBody}>
                        <span>세븐일레븐 대구대봉점</span>
                        <img src={"/images/map/arrow.svg"}/>
                        <label>황금역 대구3호선</label>
                    </div>
                    <img className={classes.reSImg} src={"/images/map/x.svg"}/>
                </div>
            </div>
        </div>
    )
}

export default Recently
