import LoginHeader from "./header/LoginHeader";
import InputTag from "../Public/Desktop/input/InputTag";
import SubmitBtn from "../Public/Desktop/button/SubmitBtn";
import SocialGroup from "./socialGroup/SocialGroup";

import classes from "./Login.module.css";
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <div className={classes.aaa}>
            <LoginHeader/>
            <div className={classes.bbb}>
                로그인
            </div>

            <div className={classes.fff}>
                <InputTag title="이메일" type="text"/>
                <InputTag title="비밀번호" type="password"/>
            </div>

            <SubmitBtn text="로그인" flag={false}/>

            <div className={classes.ccc}>
                <div>비밀번호 찾기</div>
                <div>|</div>
                <Link to={"/signup"}>회원가입</Link>
            </div>

            <hr className={classes.ddd}/>

            <div className={classes.eee}>
                SNS계정으로 간편 로그인
            </div>

            <SocialGroup/>
        </div>
    );
}

export default Login;
