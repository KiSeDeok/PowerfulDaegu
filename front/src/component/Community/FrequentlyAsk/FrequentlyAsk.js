import {useState, useEffect, useContext} from "react";
import axios from "axios";

import {AppContext} from "../../../App";
import useHttp from "../../../hooks/use-http";
import Content from "./Content";
import Pagination from "../Pagination";
import FrequentlyAskWriteModal from "../../Modal/FrequentlyAskWriteModal";

import classes from "./FrequentlyAsk.module.css";

function FrequentlyAsk() {
    const {serverUrl} = useContext(AppContext)
    const { isLoading, error, sendRequest: fetchData } = useHttp()

    // const contents = [
    //     {
    //         id: 1,
    //         question: '급식 단가 인상 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '가맹점',
    //     },
    //     {
    //         id: 2,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '가맹점',
    //     },
    //     {
    //         id: 3,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '기타',
    //     },
    //     {
    //         id: 4,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '기타',
    //     },
    //     {
    //         id: 5,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '길찾기',
    //     },
    //     {
    //         id: 6,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '길찾기',
    //     },
    //     {
    //         id: 7,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '길찾기',
    //     },
    //     {
    //         id: 8,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '가맹점',
    //     },
    //     {
    //         id: 9,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '가맹점',
    //     },
    //     {
    //         id: 10,
    //         question: '서비스 점검 안내',
    //         answer: '그것은 어쩌구 저쩌구',
    //         category: '가맹점',
    //     }
    // ];


    const [category, setCategory] = useState(0)
    const [feqModal, setFeqModal] = useState(false)
    const [checkItems, setCheckItems] = useState([])
    const [contents, setContents] = useState([])
    const [active, setActive] = useState(0)
    const [nowPage, setNowPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        if(!error) return

        const method = error.config.method
        const url = error.config.url
        switch (url) {
            case serverUrl + "feq" :
                if (method === "get") {
                    alert("!")
                }
                break
            default:
                return
        }
    }, [error, serverUrl]);

    function handleAllCheck() {
        if(!(checkItems.length === contents.length)) {
            const idArray = [];
            contents.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            setCheckItems([])
        }
    }

    function changeCategory(division) {
        setCategory(division)
    }

    function changePageNum(value) {
        setNowPage(value)
    }

    function deleteNotice() {
        alert("삭제")
    }

    return (
        <>
            <div>
                <div className={classes.content}>
                    <div className={classes.title}>
                        자주 묻는 질문
                    </div>
                    <div className={classes.category}>
                        <div className={category === 0 ? classes.categoryActive : classes.categoryDefault} onClick={changeCategory.bind(this, 0)}>
                            전체
                        </div>
                        <div className={category === 1 ? classes.categoryActive : classes.categoryDefault} onClick={changeCategory.bind(this, 1)}>
                            가맹점
                        </div>
                        <div className={category === 2 ? classes.categoryActive : classes.categoryDefault} onClick={changeCategory.bind(this, 2)}>
                            길찾기
                        </div>
                        <div className={category === 3 ? classes.categoryActive : classes.categoryDefault} onClick={changeCategory.bind(this, 3)}>
                            기타
                        </div>
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
                    <div className={classes.deleteElementBtn} onClick={deleteNotice}>
                        삭제
                    </div>
                    <div className={classes.addNoticeBtn} onClick={setFeqModal.bind(this, true)}>
                        <img className={classes.addNoticeIcon} src='/icon/pencil_icon.png' />
                        FAQ 등록
                    </div>
                </div>
            </div>

            <div>
                {contents.map(content => (
                    <Content key={content.id} content={content} active={active} setActive={setActive} />
                ))}
            </div>

            <Pagination page={nowPage} totalPage={totalPage} setPage={changePageNum} />

            <FrequentlyAskWriteModal  isOpen={feqModal} modalHandler={setFeqModal}/>
        </>
    );
}

export default FrequentlyAsk;
