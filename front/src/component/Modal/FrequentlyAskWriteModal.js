import {useState, useEffect, useContext} from "react";
import axios from 'axios';

import {AppContext} from "../../App";
import useHttp from "../../hooks/use-http";

import classes from "./PublicModal.module.css";
import moment from "moment";

function FrequentlyAskWriteModal(props) {
    const {serverUrl} = useContext(AppContext)
    const { isLoading, error, sendRequest: fetchData } = useHttp()

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [category, setCategory] = useState(0)

    useEffect(() => {
        if(!error) return

        const method = error.config.method
        const url = error.config.url
        switch (url) {
            case serverUrl + "feq" :
                if (method === "post") {
                    alert("권한이 부족합니다 : error code : " + error)
                }
                break
            default:
                return
        }
    }, [error, serverUrl]);

    useEffect(() => {
        setQuestion("")
        setAnswer("")
        setCategory(0)
    }, [props.isOpen])

    function saveFeqQuestion(event) {
        setQuestion(event.target.value)
    }

    function saveFeqAnswer(event) {
        setAnswer(event.target.value)
    }

    function saveFeq() {
        if (question.length === 0 || answer.length === 0) return

        fetchData({
            url: serverUrl + 'feq',
            type:'post',
            data:{
                "question": question,
                "answer": answer,
                "category": "franchisee"
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
                            FAQ 작성
                        </div>

                        <img className={classes.deleteBtn} src='/icon/deleteBtn_icon.png' onClick={props.modalHandler.bind(this, false)} />
                    </div>

                    <div>
                        <div className={classes.contentTitle}>
                            <div>분류</div>
                            <div>*</div>
                        </div>
                        <div className={classes.categoryBtnArea}>
                            <div className={category === 0 ? classes.feqCategoryBtnActive : classes.feqCategoryBtnDisable} onClick={setCategory.bind(this, 0)}>
                                가맹점
                            </div>
                            <div className={category === 1 ? classes.feqCategoryBtnActive : classes.feqCategoryBtnDisable} onClick={setCategory.bind(this, 1)}>
                                길찾기
                            </div>
                            <div className={category === 2 ? classes.feqCategoryBtnActive : classes.feqCategoryBtnDisable} onClick={setCategory.bind(this, 2)}>
                                기타
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.contentTitle}>
                            <div>질문</div>
                            <div>*</div>
                        </div>
                        <textarea placeholder="질문 내용을 입력해 주세요." className={classes.questionAreaBox} value={question} onChange={saveFeqQuestion}/>
                    </div>

                    <div>
                        <div className={classes.contentTitle}>
                            <div>답변</div>
                            <div>*</div>
                        </div>
                        <textarea placeholder="답변 내용을 입력해 주세요." className={classes.answerAreaBox} value={answer} onChange={saveFeqAnswer}/>
                    </div>

                    <div className={answer.length === 0 || question.length === 0 ? classes.disableBtn : classes.activeBtn} onClick={saveFeq}>
                        FAQ 등록
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default FrequentlyAskWriteModal;
