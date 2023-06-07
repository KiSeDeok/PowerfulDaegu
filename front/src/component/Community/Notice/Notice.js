import {useState} from "react";

import Pagination from "../Pagination";
import Content from "./Content";
import NoticeWriteModal from "../../Modal/NoticeWriteModal";

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
    const [category, setCategory] = useState(0);
    const [checkItems, setCheckItems] = useState([]);
    const [writeModal, setWriteModal] = useState(false);

    function handleSingleCheck(checked, id) {
        if (!checked) {
            setCheckItems(prev => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    }

    function handleAllCheck() {
        if(!(checkItems.length === contents.length)) {
            const idArray = [];
            contents.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            setCheckItems([]);
        }
    }

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

            <div className={classes.adminContent}>
                <div className={classes.checkBoxArea}>
                    <div className={checkItems.length === contents.length ? classes.checkBoxChecked : classes.checkBoxDefault} onClick={handleAllCheck}>
                        <div/>
                    </div>
                    <div className={classes.checkBoxText}>
                        전체선택
                    </div>
                </div>

                <div className={classes.adminFuncArea}>
                    <div className={classes.deleteElementBtn}>
                        삭제
                    </div>
                    <div className={classes.addNoticeBtn} onClick={setWriteModal.bind(this, true)}>
                        <img className={classes.addNoticeIcon} src='/icon/pencil_icon.png' />
                        글쓰기
                    </div>
                </div>
            </div>

            <div>
                {contents.map(content => (
                    <Content key={content.id} content={content} checked={checkItems.includes(content.id)} checkHandler={handleSingleCheck} />
                ))}
            </div>

            <Pagination nowPage={1} totalPage={4} />

            <NoticeWriteModal isOpen={writeModal} modalHandler={setWriteModal}/>
        </>
    );
}

export default Notice;
