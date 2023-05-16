import classes from './Header.module.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={classes.aaa}>

            <img className={classes.ddd} src="https://yt3.googleusercontent.com/ytc/AL5GRJUrIuGxebPH-XBtKhDDu3V2w0se-lotwsKFFLY7tg=s176-c-k-c0x00ffffff-no-rj"/>

            <div className={classes.ccc}>
                <div>가맹점 조회</div>
                <div>커뮤니티</div>
                <div><span>맵</span></div>
            </div>
            <Link to={"/login"} className={classes.bbb}>
                로그인
            </Link>
        </div>
    );
}

export default Header;
