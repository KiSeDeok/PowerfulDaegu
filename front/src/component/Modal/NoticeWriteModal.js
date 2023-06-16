import {useState, useEffect, useContext} from "react";

import {AppContext} from "../../App";
import useHttp from "../../hooks/use-http";

import classes from "./PublicModal.module.css";

function NoticeWriteModal(props) {
    const {serverUrl} = useContext(AppContext)
    const { isLoading, error, sendRequest: fetchData } = useHttp()

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [category, setCategory] = useState(0)

    useEffect(() => {
        if(!error) return

        const method = error.config.method
        const url = error.config.url
        switch (url) {
            case serverUrl + "notice" :
                if (method === "post") {
                    alert("권한이 부족합니다 : error code : " + error)
                }
                break
            default:
                return
        }
    }, [error, serverUrl]);

    useEffect(() => {
        setTitle("")
        setDetail("")
        setCategory(0)
    }, [props.isOpen])

    function saveNoticeTitle(event) {
        setTitle(event.target.value)
    }

    function saveNoticeDetail(event) {
        setDetail(event.target.value)
    }

    function saveNotice() {
        if (title.length === 0 || detail.length === 0) return

        fetchData({
            url: serverUrl + 'notice',
            type:'post',
            data:{
                "title": title,
                "content": detail,
                "category": category === 0 ? "guide" : "inspection"
            }}, (data) => {
            props.modalHandler(false)
        }).catch(error => {
            alert("권한이 부족합니다 : error code : " + error)
        })
    }

    return (
        <div className={props.isOpen ? `${classes.openModal} ${classes.modal}` : classes.modal}>
            {props.isOpen ? (
                <section>
                    <div className={classes.header}>
                        <div className={classes.title}>
                            게시글 작성
                        </div>

                        <img className={classes.deleteBtn} src='/icon/deleteBtn_icon.png' onClick={props.modalHandler.bind(this, false)} />
                    </div>

                    <div className={classes.locationArea}>
                        <div>
                            게시 위치
                        </div>
                        <div>
                            공지사항
                        </div>
                    </div>

                    <div>
                        <div className={classes.contentTitle}>
                            <div>분류</div>
                            <div>*</div>
                        </div>
                        <div className={classes.categoryBtnArea}>
                            <div className={category === 0 ? classes.noticeCategoryBtnActive : classes.noticeCategoryBtnDisable} onClick={setCategory.bind(this, 0)}>
                                안내
                            </div>
                            <div className={category === 1 ? classes.noticeCategoryBtnActive : classes.noticeCategoryBtnDisable} onClick={setCategory.bind(this, 1)}>
                                점검
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.contentTitle}>
                            <div>제목</div>
                            <div>*</div>
                        </div>
                        <input placeholder="게시글의 제목을 입력해주세요." className={classes.inputBox} value={title} onChange={saveNoticeTitle}/>
                    </div>

                    <div>
                        <div className={classes.contentTitle}>
                            <div>내용</div>
                            <div>*</div>
                        </div>
                        <textarea placeholder="게시글의 내용을 입력해주세요." className={classes.textAreaBox} value={detail} onChange={saveNoticeDetail}/>
                    </div>

                    <div className={detail.length === 0 || title.length === 0 ? classes.disableBtn : classes.activeBtn} onClick={saveNotice}>
                        게시글 등록
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default NoticeWriteModal;
