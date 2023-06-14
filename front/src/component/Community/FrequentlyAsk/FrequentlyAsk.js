import {useState} from "react";

import Content from "./Content";
import Pagination from "../Pagination";

import classes from "./FrequentlyAsk.module.css";

function FrequentlyAsk() {
    const contents = [
        {
            id: 1,
            question: '급식 단가 인상 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '가맹점',
        },
        {
            id: 2,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '가맹점',
        },
        {
            id: 3,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '기타',
        },
        {
            id: 4,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '기타',
        },
        {
            id: 5,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '길찾기',
        },
        {
            id: 6,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '길찾기',
        },
        {
            id: 7,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '길찾기',
        },
        {
            id: 8,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '가맹점',
        },
        {
            id: 9,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '가맹점',
        },
        {
            id: 10,
            question: '서비스 점검 안내',
            answer: '그것은 어쩌구 저쩌구',
            category: '가맹점',
        }
    ];
    const [category, setCategory] = useState(0)
    const [active, setActive] = useState(0)
    const [nowPage, setNowPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1)

    function changeCategory(division) {
        setCategory(division)
    }

    function changePageNum(value) {
        setNowPage(value)
    }

    return (
        <>
            <div>
                <div className={classes.bbb}>
                    <div className={classes.ddd}>
                        자주 묻는 질문
                    </div>
                    <div className={classes.ccc}>
                        <div className={category === 0 ? classes.eee : classes.fff} onClick={changeCategory.bind(this, 0)}>
                            전체
                        </div>
                        <div className={category === 1 ? classes.eee : classes.fff} onClick={changeCategory.bind(this, 1)}>
                            가맹점
                        </div>
                        <div className={category === 2 ? classes.eee : classes.fff} onClick={changeCategory.bind(this, 2)}>
                            길찾기
                        </div>
                        <div className={category === 3 ? classes.eee : classes.fff} onClick={changeCategory.bind(this, 3)}>
                            기타
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {contents.map(content => (
                    <Content key={content.id} content={content} active={active} setActive={setActive} />
                ))}
            </div>

            <Pagination page={nowPage} totalPage={totalPage} setPage={changePageNum} />
        </>
    );
}

export default FrequentlyAsk;
