import {Link} from "react-router-dom";
import { useCookies } from 'react-cookie';

import classes from './Header.module.css';

function Header(props) {
    function logout() {

    }

    return (
        <div className={props.flag === "main" ? classes.content : classes.content2}>
            <Link to={"/home"}><img className={classes.logo} src="/img/main_logo.png"/></Link>

            <div className={classes.topBar}>
                <Link to={"/map"}>가맹점 조회</Link>
                <Link to={"/community/notice"}>커뮤니티</Link>
            </div>
            {
                props.mode === 1 || props.mode === 2 ? <img className={classes.loginProfile} src="/icon/login_profile.png" onClick={logout}/>
                    : <Link to={"/login"} className={classes.loginBtn}>로그인</Link>
            }
        </div>
    );
}

export default Header;
