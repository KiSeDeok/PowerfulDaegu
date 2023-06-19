import {useState, useEffect, useContext} from "react";
import {useSelector} from "react-redux";

import {AppContext} from "../../../App";
import useHttp from "../../../hooks/use-http";
import Content from "./Content";
import Pagination from "../Pagination";
import FrequentlyAskWriteModal from "../../Modal/FrequentlyAskWriteModal";

import classes from "./FrequentlyAsk.module.css";

function FrequentlyAsk() {
    const {serverUrl} = useContext(AppContext)
    const { isLoading, error, sendRequest: fetchData } = useHttp()
    const authority = useSelector((state) => state.authority.mode)

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

    useEffect(() => {
        let nowCategory = category === 0 ? "all" : category === 1 ? "franchisee" : category === 2 ? "map" : "etc"
        getContents(1, nowCategory)
    }, [])

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

    function handleSingleCheck(checked, id) {
        if (!checked) {
            setCheckItems(prev => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    }

    function changePageNum(value) {
        setNowPage(value)
        setCheckItems([])

        let nowCategory = category === 0 ? "all" : category === 1 ? "franchisee" : category === 2 ? "map" : "etc"
        getContents(value, nowCategory)
    }

    function changeCategory(value) {
        setCategory(value)
        setNowPage(1)
        setCheckItems([])

        let nowCategory = value === 0 ? "all" : value === 1 ? "franchisee" : value === 2 ? "map" : "etc"
        getContents(1, nowCategory)
    }

    function getContents(pageNum, category) {
        fetchData({
            url: serverUrl + 'faq?page=' + pageNum + '&category=' + category,
            type:'get'
        }, (data) => {
            let fapData = []

            data[0].forEach((faq => {
                fapData.push({
                    id: faq.id,
                    question: faq.question,
                    answer: faq.answer,
                    category: faq.category === "franchisee" ? "가맹점" : faq.category === "map" ? "길찾기" : "기타"
                })
            }))

            setTotalPage(parseInt(parseInt(data[1] / 10) + ((data[1] % 10) !== 0)))
            setContents(fapData)
        }).catch(error => {
            alert("공지를 받아오지 못했습니다. : error code : " + error)
        })
    }

    function deleteNotice() {
        fetchData({
            url: serverUrl + 'faq',
            type:'delete',
            data:{
                id : checkItems
            }}, (data) => {
            let dataLen = checkItems.length
            let nowCategory = category === 0 ? "all" : category === 1 ? "franchisee" : category === 2 ? "map" : "etc"

            setCheckItems([])

            alert(dataLen + "개의 FAQ가 삭제되었습니다.")
            getContents(1, nowCategory)
        }).catch(error => {
            alert("권한이 부족합니다 : error code : " + error)
        })
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

            {
                authority === 2 ?
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
                    </div>:
                    null
            }

            <div>
                {contents.map(content => (
                    <Content key={content.id} content={content} checked={checkItems.includes(content.id)} checkHandler={handleSingleCheck} active={active} setActive={setActive}  isAdmin={authority===2} />
                ))}
            </div>

            <Pagination page={nowPage} totalPage={totalPage} setPage={changePageNum} />

            <FrequentlyAskWriteModal  isOpen={feqModal} modalHandler={setFeqModal}/>
        </>
    );
}

export default FrequentlyAsk;
