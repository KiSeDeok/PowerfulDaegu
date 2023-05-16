import {Link} from "react-router-dom";

import classes from "./Content.module.css";

function Content(props) {
    return (
        <Link to={"/community/notice/" + props.content.id} className={classes.content}>
            <div className={classes.detail}>
                <div className={classes.category}>{props.content.category}</div>
                <div className={classes.title}>{props.content.title}</div>
            </div>
            <div className={classes.date}>{props.content.date}</div>
        </Link>
    );
}

export default Content;
