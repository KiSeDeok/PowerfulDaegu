import {Link} from "react-router-dom";

import classes from "./ContentsNotification.module.css";

function ContentsNotification(props) {
    return (
        <Link to={"/community/notice/" + props.notification.id} className={classes.content}>
            <div  className={classes.title}>
                <div>[{props.notification.category}]</div>
                <div>{props.notification.title}</div>
            </div>
            <div className={classes.date}>{props.notification.date}</div>
        </Link>

    );
}

export default ContentsNotification;
