import classes from "./ContentsQuestion.module.css";

function ContentsQuestion(props) {
    return (
        <div className={classes.content}>
            <div className={classes.iconArea}>
                <div className={classes.viewIcon}>
                    <img className={classes.glassesIcon} src='/icon/glasses.png' />
                </div>
            </div>

            <div className={classes.detail}>
                <div className={classes.questionArea}>
                    <div className={classes.question}>Q.</div>
                    <div className={classes.questionDetail}>{props.question.question}</div>
                </div>
                <div className={classes.answer}>{props.question.answer}</div>
            </div>
        </div>
    );
}

export default ContentsQuestion;
