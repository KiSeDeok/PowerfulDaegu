import InputTag from "../Public/Desktop/input/InputTag";
import SubmitBtn from "../Public/Desktop/button/SubmitBtn";
import SocialGroup from "../Login/socialGroup/SocialGroup";
import LoginHeader from "../Login/header/LoginHeader";

import classes from "./SignUp.module.css";
import {Link} from "react-router-dom";

function SignUp(props) {
    return (
        <div className={classes.content}>
            <LoginHeader/>
            <div className={classes.title}>
                회원가입
            </div>
            <div className={classes.eee}>
                SNS계정으로 간편 회원가입
            </div>
            <div className={classes.jjj}>
                <SocialGroup/>
            </div>
            <hr className={classes.ddd}/>

            <InputTag title="이메일" type="text"/>
            <div>
                <button className={classes.fff}>
                    이메일 인증하기
                </button>
            </div>
            <div className={classes.kkk}>
                <InputTag title="비밀번호" type="password"/>
                <InputTag title="비밀번호 확인" type="password"/>
                <InputTag title="닉네임" type="text"/>
            </div>

            <div className={classes.ggg}>
                <div className={classes.iii}>
                    ✓
                </div>
                <div className={classes.hhh}>
                    <div>
                        ㅇㅇㅇ
                    </div>
                    <div>
                        서비스 이용 약관
                    </div>
                    <div>
                        에 동의합니다.
                    </div>
                </div>
            </div>

            <SubmitBtn text="다음" flag={true}/>

            <div className={classes.signInArea}>
                <div>
                    이미 회원가입 하셨나요?
                </div>
                <Link to={"/login"}>
                    로그인 하기
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
