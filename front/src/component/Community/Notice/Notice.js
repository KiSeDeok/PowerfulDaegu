import {useState} from "react";

import Pagination from "../Pagination";
import Content from "./Content";

import classes from "./Notice.module.css";

function Notice() {
    const contents = [
        {
            id: 1,
            title: '급식 단가 인상 안내',
            category: '안내',
            date: '2023.02.02'
        },
        {
            id: 2,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        },
        {
            id: 3,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        },
        {
            id: 4,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        },
        {
            id: 5,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        },
        {
            id: 6,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        },
        {
            id: 7,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        },
        {
            id: 8,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        },
        {
            id: 9,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        },
        {
            id: 10,
            title: '서비스 점검 안내',
            category: '점검',
            date: '2023.02.02'
        }
    ];
    const [category, setCategory] = useState(0)

    return (
        <>
            <div>
                <div className={classes.noticeHeader}>
                    <div className={classes.noticeHeaderText}>공지</div>
                    <div className={classes.categoryArea}>
                        <div className={category === 0 ? classes.categoryTextActive : classes.categoryTextDisable} onClick={setCategory.bind(this, 0)}>전체</div>
                        <div className={category === 1 ? classes.categoryTextActive : classes.categoryTextDisable} onClick={setCategory.bind(this, 1)}>안내</div>
                        <div className={category === 2 ? classes.categoryTextActive : classes.categoryTextDisable} onClick={setCategory.bind(this, 2)}>점검</div>
                    </div>
                </div>
            </div>

            <div>
                {contents.map(content => (
                    <Content key={content.id} content={content} />
                ))}
            </div>

            <Pagination nowPage={1} totalPage={4} />
        </>
    );
}

export default Notice;
