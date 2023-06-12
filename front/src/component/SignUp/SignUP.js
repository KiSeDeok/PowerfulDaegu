import {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

import InputTag from "../Public/Desktop/input/InputTag";
import SubmitBtn from "../Public/Desktop/button/SubmitBtn";
import SocialGroup from "../Login/socialGroup/SocialGroup";
import LoginHeader from "../Login/header/LoginHeader";

import classes from "./SignUp.module.css";

function SignUp(props) {
    const [email, setEmail] = useState('')
    const [emailVerify, setEmailVerify] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState("")
    const [nickName, setNickName] = useState("")

    function checkSignUp() {
        if (email.length === 0 || password.length === 0 || passwordCheck.length === 0 || nickName.length === 0 || !emailVerify) return

        console.log(email)
        console.log(password)
        console.log(nickName)

        try {
            axios.post('http://localhost:3001/users', {
                "password": password,
                "nickname": nickName,
                "term": true,
                "email": email,
                "user_type": "origin"
            }, {withCredentials: true}).then(data => {
                console.log(data)
            }).catch(e => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        }

    }

    function emailCheck() {
        if (email.length === 0) return

        axios.post('http://localhost:3001/users/code-create', {
            "email": email
        }, {withCredentials: true}).then(data => {
            if (data.data.success) {
                axios.post('http://localhost:3001/users/code-check', {
                    "email": email,
                    "code": data.data.code
                }, {withCredentials: true}).then(data => {
                    if (data.data.result) {
                        setEmailVerify(true)
                        alert("이메일 체크 완료")
                    }
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    }

    function saveEmail(event) {
        setEmail(event.target.value)
    }

    function savePassword(event) {
        setPassword(event.target.value)
    }

    function savePasswordCheck(event) {
        setPasswordCheck(event.target.value)
    }

    function saveNickName(event) {
        setNickName(event.target.value)
    }

    return (
        <div className={classes.content}>
            <LoginHeader/>
            <div className={classes.title}>
                회원가입
            </div>
            <div className={classes.socialLoginText}>
                SNS계정으로 간편 회원가입
            </div>
            <div className={classes.socialArea}>
                <SocialGroup/>
            </div>
            <hr className={classes.line}/>

            <InputTag disabled={emailVerify} title="이메일" type="text" onChange={saveEmail}/>
            <div>
                <button className={email.length === 0 ? classes.emailVerifyBtn : classes.emailVerifyBtnActive} onClick={emailCheck}>
                    이메일 인증하기
                </button>
            </div>
            <div className={classes.inputArea}>
                <InputTag title="비밀번호" type="password" onChange={savePassword}/>
                <InputTag title="비밀번호 확인" type="password" onChange={savePasswordCheck}/>
                <InputTag title="닉네임" type="text" onChange={saveNickName}/>
            </div>

            <div className={classes.checkBox}>
                <div className={classes.checkBoxBtn}>
                    ✓
                </div>
                <div className={classes.checkBoxText}>
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

            <SubmitBtn text="다음" flag={email.length === 0 || password.length === 0 || passwordCheck.length === 0 || nickName.length === 0 || !emailVerify} eventBtn={checkSignUp}/>

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
