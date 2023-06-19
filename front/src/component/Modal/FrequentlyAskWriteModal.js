import {useState, useEffect, useContext} from "react";

import {AppContext} from "../../App";
import useHttp from "../../hooks/use-http";

import classes from "./PublicModal.module.css";

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
            case serverUrl + "faq" :
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

    function saveFaqQuestion(event) {
        setQuestion(event.target.value)
    }

    function saveFaqAnswer(event) {
        setAnswer(event.target.value)
    }

    function saveFaq() {
        if (question.length === 0 || answer.length === 0) return

        fetchData({
            url: serverUrl + 'faq',
            type:'post',
            data:{
                "question": question,
                "answer": answer,
                "category": category === 0 ? "franchisee" : category === 1 ? "map" : "etc"
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
                            <div className={category === 0 ? classes.faqCategoryBtnActive : classes.faqCategoryBtnDisable} onClick={setCategory.bind(this, 0)}>
                                가맹점
                            </div>
                            <div className={category === 1 ? classes.faqCategoryBtnActive : classes.faqCategoryBtnDisable} onClick={setCategory.bind(this, 1)}>
                                길찾기
                            </div>
                            <div className={category === 2 ? classes.faqCategoryBtnActive : classes.faqCategoryBtnDisable} onClick={setCategory.bind(this, 2)}>
                                기타
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.contentTitle}>
                            <div>질문</div>
                            <div>*</div>
                        </div>
                        <textarea placeholder="질문 내용을 입력해 주세요." className={classes.questionAreaBox} value={question} onChange={saveFaqQuestion}/>
                    </div>

                    <div>
                        <div className={classes.contentTitle}>
                            <div>답변</div>
                            <div>*</div>
                        </div>
                        <textarea placeholder="답변 내용을 입력해 주세요." className={classes.answerAreaBox} value={answer} onChange={saveFaqAnswer}/>
                    </div>

                    <div className={answer.length === 0 || question.length === 0 ? classes.disableBtn : classes.activeBtn} onClick={saveFaq}>
                        FAQ 등록
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default FrequentlyAskWriteModal;
