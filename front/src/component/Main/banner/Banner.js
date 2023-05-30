import PagingBtn from "./PagingBtn";

import classes from './Banner.module.css';

function Banner() {
    return (
        <div className={classes.content}>
            <div className={classes.searchArea}>
                가맹점 찾기
                <img className={classes.glassesIcon} src='/icon/glasses.png' />
                <br/>
                이제ㅇㅇㅇ로 편리하게
            </div>
            <div className={classes.textArea}>
                대구 급식카드 가맹점 조회 서비스
            </div>
            <div className={classes.btnArea}>
                <PagingBtn name="가맹점 조회하기" color="black" link="/map"/>
                <PagingBtn name="카드 신청하기" color="white" link="https://www.dgbupay.com/dgtcs/hps/pages/intro/card_type_05.jsp"/>
            </div>
        </div>
    );
}

export default Banner;
