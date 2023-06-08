import classes from "./InputTag.module.css";

function InputTag(props) {
    return (
        <div>
            <div className={classes.header}>
                {props.title}
            </div>
            <input disabled={props.disabled} type={props.type} placeholder={props.title + "를 입력해 주세요."} className={classes.inputBox} value={props.value} onChange={props.onChange}/>
        </div>
    );
}

export default InputTag;
