import {useState, useContext, useEffect } from "react";
import { useCookies } from 'react-cookie';
import {useSelector, useDispatch} from "react-redux";
import moment from 'moment';

import {AppContext} from "../../App";
import useHttp from "../../hooks/use-http";
import LoginHeader from "./header/LoginHeader";
import InputTag from "../Public/Desktop/input/InputTag";
import SubmitBtn from "../Public/Desktop/button/SubmitBtn";
import SocialGroup from "./socialGroup/SocialGroup";

import classes from "./Login.module.css";
import {Link} from "react-router-dom";
import {authorityActions} from "../../store/user/authority-slice";

function Login(props) {
    const {serverUrl} = useContext(AppContext);
    const { isLoading, error, sendRequest: fetchData } = useHttp();
    const dispatch = useDispatch()
    const authority = useSelector((state) => state.authority.mode)

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [idError, setIdError] = useState('');
    const [pwError, setPwError] = useState('');

    const [cookies, setCookie] = useCookies(['access_token']);

    const saveUserId = event => {
        setId(event.target.value);
    };

    const saveUserPw = event => {
        setPw(event.target.value);
    };

    const loginBtn = () => {
        fetchData({
            url: serverUrl + 'users/login',
            type:'post',
            data:{
                "email": id,
                "password": pw
            }}, (data) => {
            const expires = moment().add('10', 'day').toDate()

            setCookie('access_token', data.access_token, {expires})

            window.location.replace("home")
        }).catch(error => {
            setPwError("가입되어 있지 않은 계정이거나, 이메일 또는 비밀번호가 일치하지 않습니다.")
        })
    }

    useEffect(() => {
        if(!error) return
        switch (error.request.responseURL) {
            case serverUrl + "users/login":
                setPwError("가입되어 있지 않은 계정이거나, 이메일 또는 비밀번호가 일치하지 않습니다.")
                break
            default:
                return
        }
    }, [error, serverUrl]);

    return (
        <div className={classes.content}>
            <LoginHeader/>
            <div className={classes.header}>
                로그인
            </div>

            <div className={classes.inputArea}>
                <InputTag title="이메일" type="text" value={id} onChange={saveUserId} errorMsg={idError} />
                <InputTag title="비밀번호" type="password" value={pw} onChange={saveUserPw} errorMsg={pwError} />
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
