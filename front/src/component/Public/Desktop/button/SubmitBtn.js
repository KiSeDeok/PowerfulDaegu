import classes from "./SubmitBtn.module.css";

function SubmitBtn(props) {
    return (
        <div>
            <button onClick={props.eventBtn} disabled={props.flag} className={classes.button}>
                {props.text}
            </button>
        </div>
    );
}

export default SubmitBtn;
