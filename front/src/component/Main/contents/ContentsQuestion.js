import classes from "./ContentsQuestion.module.css";

function ContentsQuestion(props) {
    return (
        <div className={classes.aaa}>
            <div className={classes.bbb}>
                <div className={classes.ddd}>
                    🔍
                </div>
            </div>

            <div className={classes.ccc}>
                <div className={classes.eee}>
                    <div className={classes.fff}>Q.</div>
                    <div className={classes.ggg}>{props.question.question}</div>
                </div>
                <div className={classes.hhh}>{props.question.answer}</div>
            </div>
        </div>
    );
}

export default ContentsQuestion;
