import ContentsNotification from "./ContentsNotification"
import ContentsQuestion from "./ContentsQuestion"
import PublicView from "./PublicView";

import classes from "./Contents.module.css";
import {Link} from "react-router-dom";

function Contents() {
    const notification = [
        {
            id: 1,
            title: '급식 단가 인상 안내',
            category: '안내',
            date: '2023.02.02'
        },
        {
            id: 2,
            title: '급식 단가 인상 안내',
            category: '안내',
            date: '2023.02.02'
        },
        {
            id: 3,
            title: '급식 단가 인상 안내',
            category: '안내',
            date: '2023.02.02'
        },
        {
            id: 4,
            title: '급식 단가 인상 안내',
            category: '안내',
            date: '2023.02.02'
        },
        {
            id: 5,
            title: '급식 단가 인상 안내',
            category: '안내',
            date: '2023.02.02'
        }
    ];

    const question = [
        {
            id: 1,
            question: "이사를 한 경우에는?",
            answer: "관내로 이사한 경우 기존의 카드를 그대로 이용가능하며, 타 지역으로 이사한 경우 기존 카드는 사용이 불가합니다. (이사 후 주민센터로 문의)",
        },
        {
            id: 2,
            question: "이사를 한 경우에는?",
            answer: "관내로 이사한 경우 기존의 카드를 그대로 이용가능하며, 타 지역으로 이사한 경우 기존 카드는 사용이 불가합니다. (이사 후 주민센터로 문의)",        },
        {
            id: 3,
            question: "이사를 한 경우에는?",
            answer: "관내로 이사한 경우 기존의 카드를 그대로 이용가능하며, 타 지역으로 이사한 경우 기존 카드는 사용이 불가합니다. (이사 후 주민센터로 문의)",        },
        {
            id: 4,
            question: "이사를 한 경우에는?",
            answer: "관내로 이사한 경우 기존의 카드를 그대로 이용가능하며, 타 지역으로 이사한 경우 기존 카드는 사용이 불가합니다. (이사 후 주민센터로 문의)",        },
        {
            id: 5,
            question: "이사를 한 경우에는?",
            answer: "관내로 이사한 경우 기존의 카드를 그대로 이용가능하며, 타 지역으로 이사한 경우 기존 카드는 사용이 불가합니다. (이사 후 주민센터로 문의)",        },
        {
            id: 6,
            question: "이사를 한 경우에는?",
            answer: "관내로 이사한 경우 기존의 카드를 그대로 이용가능하며, 타 지역으로 이사한 경우 기존 카드는 사용이 불가합니다. (이사 후 주민센터로 문의)",        }
    ]

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
                            <div>{"<"}</div>
                        </div>
                        <div className={classes.faqPageNationDetail}>1/3</div>
                        <div className={classes.faqPageNationRight}>
                            <div>{">"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contents;
