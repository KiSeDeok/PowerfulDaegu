import {useState, useEffect, useContext} from "react";
import {useSelector} from "react-redux";

import {AppContext} from "../../../App";
import useHttp from "../../../hooks/use-http";
import Pagination from "../Pagination";
import Content from "./Content";
import NoticeWriteModal from "../../Modal/NoticeWriteModal";

import classes from "./Notice.module.css";

function Notice() {
    const {serverUrl} = useContext(AppContext)
    const { isLoading, error, sendRequest: fetchData } = useHttp()
    const authority = useSelector((state) => state.authority.mode)

    const [category, setCategory] = useState(0)
    const [checkItems, setCheckItems] = useState([])
    const [writeModal, setWriteModal] = useState(false)
    const [contents, setContents] = useState([])
    const [nowPage, setNowPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        if(!error) return

        const method = error.config.method
        const url = error.config.url
        switch (url) {
            case serverUrl + "notice" :
                if (method === "get") {
                    alert("공지를 불러오는것에 실패하였습니다.")
                }
                break
            default:
                return
        }
    }, [error, serverUrl]);

    useEffect(() => {
        let nowCategory = category === 0 ? "all" : category === 1 ? "guide" : "inspection"
        getContents(1, nowCategory)
    }, [])

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

        let nowCategory = category === 0 ? "all" : category === 1 ? "guide" : "inspection"
        getContents(value, nowCategory)
    }

    function changeCategory(value) {
        setCategory(value)
        setNowPage(1)
        setCheckItems([])

        let nowCategory = value === 0 ? "all" : value === 1 ? "guide" : "inspection"
        getContents(1, nowCategory)
    }

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

    function getContents(pageNum, category) {
        fetchData({
            url: serverUrl + 'notice?page=' + pageNum + '&category=' + category,
            type:'get'
        }, (data) => {
            let noticeData = []
            data.notice.forEach((notice => {
                noticeData.push({
                    id: notice.id,
                    title: notice.title,
                    category: notice.category === "inspection" ? "점검" : "안내",
                    date: notice.createdAt.slice(0, 10).replaceAll("-", ".")
                })
            }))

            setTotalPage(parseInt(parseInt(data.count / 10) + ((data.count % 10) !== 0)))
            setContents(noticeData)
        }).catch(error => {
            alert("공지를 받아오지 못했습니다. : error code : " + error)
        })
    }

    function deleteNotice() {
        fetchData({
            url: serverUrl + 'notice',
            type:'delete',
            data:{
                id : checkItems
            }}, (data) => {
            let dataLen = checkItems.length
            let nowCategory = category === 0 ? "all" : category === 1 ? "guide" : "inspection"

            setCheckItems([])

            alert(dataLen + "개의 공지가 삭제되었습니다.")
            getContents(1, nowCategory)
        }).catch(error => {
            alert("권한이 부족합니다 : error code : " + error)
        })
    }

    return (
        <>
            <div>
                <div className={classes.noticeHeader}>
                    <div className={classes.noticeHeaderText}>공지</div>

                    <div className={classes.categoryArea}>
                        <div className={category === 0 ? classes.categoryTextActive : classes.categoryTextDisable} onClick={changeCategory.bind(this, 0)}>전체</div>
                        <div className={category === 1 ? classes.categoryTextActive : classes.categoryTextDisable} onClick={changeCategory.bind(this, 1)}>안내</div>
                        <div className={category === 2 ? classes.categoryTextActive : classes.categoryTextDisable} onClick={changeCategory.bind(this, 2)}>점검</div>
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
                            <div className={classes.addNoticeBtn} onClick={setWriteModal.bind(this, true)}>
                                <img className={classes.addNoticeIcon} src='/icon/pencil_icon.png' />
                                글쓰기
                            </div>
                        </div>
                    </div>:
                    null
            }

            <div>
                {contents.map(content => (
                    <Content key={content.id} content={content} checked={checkItems.includes(content.id)} checkHandler={handleSingleCheck} isAdmin={authority===2}/>
                ))}
            </div>

            <Pagination page={nowPage} totalPage={totalPage} setPage={changePageNum} />

            <NoticeWriteModal isOpen={writeModal} modalHandler={setWriteModal}/>
        </>
    );
}

export default Notice;
