import {useState} from "react";
import { useCookies } from 'react-cookie';
import moment from 'moment';
import axios from 'axios';

import LoginHeader from "./header/LoginHeader";
import InputTag from "../Public/Desktop/input/InputTag";
import SubmitBtn from "../Public/Desktop/button/SubmitBtn";
import SocialGroup from "./socialGroup/SocialGroup";

import classes from "./Login.module.css";
import {Link} from "react-router-dom";

function Login(props) {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [cookies, setCookie] = useCookies(['access_token']);

    const saveUserId = event => {
        setId(event.target.value);
    };

    const saveUserPw = event => {
        setPw(event.target.value);
    };

    const loginBtn = () => {
        try {
            axios.post('http://localhost:3001/users/login', {
                "email": id,
                "password": pw
            }, {withCredentials: true}).then(data => {
                const expires = moment().add('10', 'day').toDate()

                setCookie('access_token', data.access_token, {expires})

                window.location.replace("home")
            }).catch(error => {
                console.log(error)
            })
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={classes.content}>
            <LoginHeader/>
            <div className={classes.header}>
                로그인
            </div>

            <div className={classes.inputArea}>
                <InputTag title="이메일" type="text" value={id} onChange={saveUserId} />
                <InputTag title="비밀번호" type="password" value={pw} onChange={saveUserPw} />
            </div>

            <SubmitBtn text="로그인" flag={false} eventBtn={loginBtn} />

            <div className={classes.funArea}>
                <div>비밀번호 찾기</div>
                <div>|</div>
                <Link to={"/signup"}>회원가입</Link>
            </div>

            <hr className={classes.line}/>

            <div className={classes.socialFunc}>
                SNS계정으로 간편 로그인
            </div>

            <SocialGroup/>
        </div>
    );
}

export default Login;
