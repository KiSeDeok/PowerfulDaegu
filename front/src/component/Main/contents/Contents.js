import {useState, useEffect, useContext} from "react";

import {AppContext} from "../../../App";
import useHttp from "../../../hooks/use-http";
import ContentsNotification from "./ContentsNotification"
import ContentsQuestion from "./ContentsQuestion"
import PublicView from "./PublicView";

import classes from "./Contents.module.css";
import {Link} from "react-router-dom";

function Contents() {
    const {serverUrl} = useContext(AppContext)
    const { isLoading, error, sendRequest: fetchData } = useHttp()

    const [notification, setNotification] = useState([])
    const [question, setQuestion] = useState([])
    const [viewQuestion, setViewQuestion] = useState([])
    const [questionPage, setQuestionPage] = useState(1)

    useEffect(() => {
        getNotification()
        getFeqData()
    }, [])

    function getNotification() {
        fetchData({
            url: serverUrl + 'notice?page=1&category=all',
            type:'get'
        }, (data) => {
            let noticeData = []

            data.notice.forEach((notice => {
                if(noticeData.length < 5){
                    noticeData.push({
                        id: notice.id,
                        title: notice.title,
                        category: notice.category === "inspection" ? "점검" : "안내",
                        date: notice.createdAt.slice(0, 10).replaceAll("-", ".")
                    })
                }
            }))
            setNotification(noticeData)
        }).catch(error => {
            alert("공지를 받아오지 못했습니다. : error code : " + error)
        })
    }

    function getFeqData() {
        fetchData({
            url: serverUrl + 'faq?page=1&category=all',
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
            fetchData({
                url: serverUrl + 'faq?page=2&category=all',
                type:'get'
            }, (data) => {
                data[0].slice(0,8).forEach((faq => {
                    fapData.push({
                        id: faq.id,
                        question: faq.question,
                        answer: faq.answer,
                        category: faq.category === "franchisee" ? "가맹점" : faq.category === "map" ? "길찾기" : "기타"
                    })
                }))
                setViewQuestion(fapData.slice(0,6))
                setQuestion(fapData)
            }).catch(error => {
                alert("공지를 받아오지 못했습니다. : error code : " + error)
            })
        }).catch(error => {
            alert("공지를 받아오지 못했습니다. : error code : " + error)
        })
    }

    function nextPage() {
        if (questionPage === 3) return

        setQuestionPage(questionPage + 1)
    }

    function beforePage() {
        if (questionPage === 1) return

        setQuestionPage(questionPage - 1)
    }

    function setPage(pageNum) {
        if (pageNum <= 0 || pageNum >= 4) return

        setQuestionPage(pageNum)
        setViewQuestion(question.slice((pageNum - 1) * 6, pageNum * 6))
    }

    return (
        <div>
            <div className={classes.topArea}>

                <div className={classes.contentHeader}>
                    <div className={classes.contentTitle}>
                        공지사항
                    </div>
                    <div className={classes.contentViewMore}>
                        <div className={classes.contentText}>
                            놓치지 말고 확인해요
                            <img className={classes.checkIcon} src='/icon/check_icon.png' />
                        </div>
                        <Link to={"/community/notice"} className={classes.viewMore}>
                            전체보기 >
                        </Link>
                    </div>
                </div>

                <div className={classes.notificationContent}>
                    {notification.map(notification => (
                        <ContentsNotification key={notification.id} notification={notification} />
                    ))}
                </div>
            </div>


            <div className={classes.bottomArea}>
                <div className={classes.faqHeader}>
                    <div className={classes.faqTitle}>
                        FAQ
                    </div>
                    <div className={classes.faqViewMore}>
                        <div> </div>
                        <div className={classes.faqText}>자주 묻는 질문</div>
                        <Link to={"/community/feq"} className={classes.faqViewMoreArea}>전체 보기 ></Link>
                    </div>
                </div>


                <div className={classes.faqContent}>
                    {viewQuestion.map(question => (
                        <ContentsQuestion key={question.id} question={question} />
                    ))}
                </div>

                <div>
                    <div className={classes.gaugeBarBack}>
                        <div className={questionPage === 1 ? classes.gaugeBarFront : classes.gaugeBarFrontDisable} onClick={setPage.bind(this, 1)}> </div>
                        <div className={questionPage === 2 ? classes.gaugeBarFront : classes.gaugeBarFrontDisable} onClick={setPage.bind(this, 2)}> </div>
                        <div className={questionPage === 3 ? classes.gaugeBarFront : classes.gaugeBarFrontDisable} onClick={setPage.bind(this, 3)}> </div>
                    </div>

                    <div className={classes.faqPageNation}>
                        <div className={questionPage === 1 ? classes.faqPageNationDisable : classes.faqPageNationActive} onClick={setPage.bind(this, questionPage - 1)}>
                            <div><img className={classes.arrowIcon} src='/icon/leftArrow_mini.png'/></div>
                        </div>
                        <div className={classes.faqPageNationDetail}>{questionPage}/3</div>
                        <div className={questionPage === 3 ? classes.faqPageNationDisable : classes.faqPageNationActive}  onClick={setPage.bind(this, questionPage + 1)}>
                            <div><img className={classes.arrowIcon} src='/icon/rightArrow_mini.png'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contents;
