import classes from "./Content.module.css";
import {Link} from "react-router-dom";

function Content(props) {
    return (
        <Link to={"/notice/" + props.content.id} className={classes.bbb}>
            <div className={classes.aaa}>
                <div className={classes.ccc}>
                    {props.content.category}
                </div>

                <div className={classes.ddd}>
                    {props.content.title}
                </div>
            </div>
            <div className={classes.eee}>
                {props.content.date}
            </div>
        </Link>
    );
}

export default Content;
