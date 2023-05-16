import PagingBtn from "./PagingBtn";

import classes from './Banner.module.css';

function Banner() {
    return (
        <div className={classes.aaa}>
            <div className={classes.bbb}>
                가맹점 찾기🔍<br/>
                이제ㅇㅇㅇ로 편리하게
            </div>
            <div className={classes.ddd}>
                대구 급식카드 가맹점 조회 서비스
            </div>
            <div className={classes.ccc}>
                <PagingBtn name="가맹점 조회하기" color="black" link="https://www.naver.com/"/>
                <PagingBtn name="카드 신청하기" color="white" link="https://www.youtube.com/"/>
            </div>
        </div>
    );
}

export default Banner;
