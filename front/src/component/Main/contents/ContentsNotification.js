import classes from "./ContentsNotification.module.css";

function ContentsNotification(props) {
    return (
        <div className={classes.aaa}>
            <div className={classes.bbb}>{props.notification.title}</div>
            <div className={classes.ccc}>{props.notification.text}</div>
            <div className={classes.ddd}>{props.notification.date}</div>
        </div>
    );
}

export default ContentsNotification;
