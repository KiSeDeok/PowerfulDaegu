import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import classes from "./DetailContent.module.css";

function DetailContent() {
    const [category, setCategory] = useState("")
    const [detail, setDetail] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        setCategory("안내")
        setTitle("급식 단가 인상 안내")
        setDate("2023.02.02")
        setDetail("2023년 2월 10일 부터 급식 단가가 7,000원에서 8,000원으로 인상될 예정 어쩌구 저쩌구 입니다.\n" +
            "스마트올중학을 이용해 주시는 회원 여러분께 진심으로 감사드리며, 스마트올중학 \"개인정보 처리방침\"\n" +
            "변경에 관한 안내말씀 드립니다.\n" +
            "아래의 \"개인정보 처리방침\" 변경사항을 확인하시고, 서비스 이용에 참고 부탁드리겠습니다.\n" +
            "\n" +
            "[변경사항]\n" +
            "1) 개인정보 제3자 제공에 관한 사항\n" +
            "- 제휴 종료로 인한 개인정보 제3자 제공 업체 삭제")
    }, [])

    return (
        <div className={classes.content}>
            <div className={classes.communityHeader}>
                <div className={classes.communityHeaderTitle}>공지</div>

                <Link to={"/community/notice"} className={classes.removeLine}>
                    <div className={classes.backArrowDefault}/>
                    <div className={classes.backArrowText}>목록으로</div>
                </Link>
            </div>

            <div className={classes.noticeHeader}>
                <div className={classes.removeLine}>
                    <div className={classes.category}>{category}</div>
                    <div className={classes.title}>{title}</div>
                </div>

                <div className={classes.date}>{date}</div>
            </div>

            <div className={classes.detail}>{detail}</div>
        </div>
    );
}

export default DetailContent;
