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
    const [questionPage, setQuestionPage] = useState(0)

    useEffect(() => {
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

        fetchData({
            url: serverUrl + 'faq?page=1&category=all',
            type:'get'
        }, (data) => {
            let fapData = []

            data[0].slice(0,6).forEach((faq => {
                fapData.push({
                    id: faq.id,
                    question: faq.question,
                    answer: faq.answer,
                    category: faq.category === "franchisee" ? "가맹점" : faq.category === "map" ? "길찾기" : "기타"
                })
            }))
            setQuestion(fapData)
        }).catch(error => {
            alert("공지를 받아오지 못했습니다. : error code : " + error)
        })
    }, [])

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
                    {question.map(question => (
                        <ContentsQuestion key={question.id} question={question} />
                    ))}
                </div>

                <div>
                    <div className={classes.gaugeBarBack}>
                        <div className={classes.gaugeBarFront}> </div>
                    </div>

                    <div className={classes.faqPageNation}>
                        <div className={classes.faqPageNationLeft}>
                            <div><img className={classes.arrowIcon} src='/icon/leftArrow_mini.png'/></div>
                        </div>
                        <div className={classes.faqPageNationDetail}>1/3</div>
                        <div className={classes.faqPageNationRight}>
                            <div><img className={classes.arrowIcon} src='/icon/rightArrow_mini.png'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contents;
