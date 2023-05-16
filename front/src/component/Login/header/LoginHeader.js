import classes from "./LoginHeader.module.css";
import {Link} from "react-router-dom";

function LoginHeader(props) {
    return (
        <div>
            <Link to={"/home"}>
                <img className={classes.ddd} src="https://yt3.googleusercontent.com/ytc/AL5GRJUrIuGxebPH-XBtKhDDu3V2w0se-lotwsKFFLY7tg=s176-c-k-c0x00ffffff-no-rj"/>
            </Link>
        </div>
    );
}

export default LoginHeader;
