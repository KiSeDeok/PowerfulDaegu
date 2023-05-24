import {Link} from "react-router-dom";

import classes from './Header.module.css';

function Header(props) {
    return (
        <div className={props.flag === "main" ? classes.content : classes.content2}>
            <Link to={"/home"}><img className={classes.logo} src="/img/main_logo.png"/></Link>

            <div className={classes.topBar}>
                <Link to={"/map"}>가맹점 조회</Link>
                <Link to={"/community/notice"}>커뮤니티</Link>
            </div>
            <Link to={"/login"} className={classes.loginBtn}>로그인</Link>
        </div>
    );
}

export default Header;
