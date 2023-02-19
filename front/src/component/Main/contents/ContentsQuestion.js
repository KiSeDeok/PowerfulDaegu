import classes from "./ContentsQuestion.module.css";

function ContentsQuestion(props) {
    return (
        <div className={classes.aaa}>
            <img className={classes.bbb} src={props.question.src}/>
            <div className={classes.ccc}>{props.question.text}</div>
        </div>
    );
}

export default ContentsQuestion;
