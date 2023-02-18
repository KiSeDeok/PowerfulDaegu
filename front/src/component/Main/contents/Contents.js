import ContentsNotification from "./ContentsNotification"
import ContentsQuestion from "./ContentsQuestion"

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

    return (
        <div>
            <div className={classes.aaa}>
                {notification.map(notification => (
                    <ContentsNotification notification={notification} />
                ))}
            </div>
            <ContentsQuestion/>
        </div>
    );
}

export default Contents;
