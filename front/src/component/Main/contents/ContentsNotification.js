import classes from "./ContentsNotification.module.css";

function ContentsNotification(props) {
    return (
        <div className={classes.aaa}>
            <div  className={classes.bbb}>
                <div>[{props.notification.category}]</div>
                <div>{props.notification.title}</div>
            </div>
            <div className={classes.ddd}>{props.notification.date}</div>
        </div>

    );
}

export default ContentsNotification;
