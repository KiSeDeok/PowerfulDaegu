import classes from "./FindContent.module.css"

function FindContent(props){
    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <div className={classes.headLeft}>
                    <span>11분</span>
                    <div className={classes.hlPriceBox}>
                        <span>어린이 800원</span>
                        <span>|</span>
                        <span>청소년 1300원</span>
                        <span>|</span>
                        <span>일반 1800원</span>
                        <img />
                    </div>
                </div>
                <div className={classes.headRight}>
                    <div className={classes.hrBox}>
                        <img/>
                    </div>
                </div>
            </div>
            <div className={classes.body}>

            </div>
        </div>
    )
}

export default FindContent
