import ContentsNotification from "./ContentsNotification"
import ContentsQuestion from "./ContentsQuestion"
import PublicView from "./PublicView";

import classes from "./Contents.module.css";

function Contents() {
    const notification = [
        {
            id: 1,
            title: '급식 단가 인상 안내',
            text: '2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부',
            date: '2023.02.02'
        },
        {
            id: 2,
            title: '급식 단가 인상 안내',
            text: '2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부',
            date: '2023.02.02'
        },
        {
            id: 3,
            title: '급식 단가 인상 안내',
            text: '2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부',
            date: '2023.02.02'
        },
        {
            id: 3,
            title: '급식 단가 인상 안내',
            text: '2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부',
            date: '2023.02.02'
        }
    ];

    const question = [
        {
            id: 1,
            text: '2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부 ?',
            src: 'https://yt3.googleusercontent.com/ytc/AL5GRJXXb-CDYOCui0j4SwWqQvixGVspTqPAWMxanuDwLfA=s176-c-k-c0x00ffffff-no-rj'
        },
        {
            id: 2,
            text: '2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부 ?',
            src: 'https://yt3.googleusercontent.com/ytc/AL5GRJXXb-CDYOCui0j4SwWqQvixGVspTqPAWMxanuDwLfA=s176-c-k-c0x00ffffff-no-rj'
        },
        {
            id: 3,
            text: '2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부 ?2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부 ?2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부 ?',
            src: 'https://yt3.googleusercontent.com/ytc/AL5GRJXXb-CDYOCui0j4SwWqQvixGVspTqPAWMxanuDwLfA=s176-c-k-c0x00ffffff-no-rj'
        },
        {
            id: 4,
            text: '2023.02.02 부로 대구시 급식 단가가 기존 7,200원 에서8,000원으로 인상됨 을 알려드립니다. 이는 일부 ?',
            src: 'https://yt3.googleusercontent.com/ytc/AL5GRJXXb-CDYOCui0j4SwWqQvixGVspTqPAWMxanuDwLfA=s176-c-k-c0x00ffffff-no-rj'
        }
    ]

    return (
        <div className={classes.ccc}>
            <PublicView title='공지' link='https://www.naver.com/'/>
            <div className={classes.aaa}>
                {notification.map(notification => (
                    <ContentsNotification notification={notification} />
                ))}
            </div>

            <PublicView title='자주 묻는 질문' link='https://www.naver.com/'/>
            <div className={classes.bbb}>
                {question.map(question => (
                    <ContentsQuestion question={question} />
                ))}
            </div>
        </div>
    );
}

export default Contents;
