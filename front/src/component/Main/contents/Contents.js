import ContentsNotification from "./ContentsNotification"
import ContentsQuestion from "./ContentsQuestion"
import PublicView from "./PublicView";

import classes from "./Contents.module.css";

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
        <div className={classes.ccc}>
            <div className={classes.ddd}>

                <div className={classes.aaa}>
                    <div className={classes.ggg}>
                        공지사항
                    </div>
                    <div className={classes.hhh}>
                        <div className={classes.iii}>
                            놓치지 말고 확인해요
                            <img className={classes.lll} src='/icon/check_icon.png' />
                        </div>
                        <div className={classes.jjj}>
                            전체보기 >
                        </div>
                    </div>
                </div>

                <div className={classes.kkk}>
                    {notification.map(notification => (
                        <ContentsNotification notification={notification} />
                    ))}
                </div>
            </div>


            <div className={classes.eee}>
                <div className={classes.nnn}>
                    <div className={classes.mmm}>
                        FAQ
                    </div>
                    <div className={classes.ooo}>
                        <div> </div>
                        <div className={classes.qqq}>자주 묻는 질문</div>
                        <div className={classes.ppp}>전체 보기 ></div>
                    </div>
                </div>


                <div className={classes.bbb}>
                    {question.map(question => (
                        <ContentsQuestion question={question} />
                    ))}
                </div>

                <div>
                    <div className={classes.www}>
                        <div className={classes.rrr}> </div>
                    </div>

                    <div className={classes.sss}>
                        <div className={classes.ttt}>
                            <div>{"<"}</div>
                        </div>
                        <div className={classes.vvv}>1/3</div>
                        <div className={classes.uuu}>
                            <div>{">"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contents;
