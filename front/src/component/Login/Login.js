import {useState} from "react";
import { useCookies } from 'react-cookie'; // useCookies import
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

    const testBtn = () => {
        // fetch("http://43.200.14.40/notice", {
        //     method : "POST",
        //     credentials: "same-origin",
        //     headers : {
        //         "Content-Type":"application/json; charset=utf-8",
        //         "Authorization":"ejrwndejrwndejrwndejrnwd"
        //     },
        //     body: JSON.stringify({
        //         "title": "공지사항 입니다.",
        //         "content": "공지사항 입니다.",
        //         "category": "inspection"
        //     })
        // })        // 리턴값이 있으면 리턴값에 맞는 req 지정
        //     .then(res=> {
        //         console.log(res)
        //         // setCookie('access_token', res.access_token)
        //     });

        fetch("http://43.200.14.40/store/like", {
            method : "GET",
        }) .then(res=>res.json())       // 리턴값이 있으면 리턴값에 맞는 req 지정
            .then(res=> {
                console.log(res)
                // setCookie('access_token', res.access_token)
            });


        // try {
        //     // POST 요청은 body에 실어 보냄
        //     axios.post('http://43.200.14.40/notice', {
        //         "title": "공지사항 입니다.",
        //         "content": "공지사항 입니다.",
        //         "category": "inspection"
        //     },  { withCredentials : true }).then(data => {
        //         console.log(data)
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // } catch (e) {
        //     console.error(e);
        // }
    }

    const loginBtn = () => {
        try{
            fetch("http://43.200.14.40/users/login", {
                method : "POST",
                headers : {
                    "Content-Type":"application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    "email" : id,
                    "password" : pw
                })
            }).then(res=>res.json())        // 리턴값이 있으면 리턴값에 맞는 req 지정
                .then(res=> {
                    const expires =  moment().add('10','day').toDate()
                    const sameSite = "none"

                    console.log(res)

                    setCookie('access_token', res.access_token,{expires})
                });
        }catch (e) {
            console.log(e)
        }

    }

    return (
        <div className={classes.aaa}>
            <LoginHeader/>
            <div className={classes.bbb}>
                로그인
            </div>

            <div className={classes.fff}>
                <InputTag title="이메일" type="text" value={id} onChange={saveUserId} />
                <InputTag title="비밀번호" type="password" value={pw} onChange={saveUserPw} />
            </div>

            <SubmitBtn text="로그인" flag={false} eventBtn={loginBtn} />

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
