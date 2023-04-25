import classes from "./InputTag.module.css";

function InputTag(props) {
    return (
        <div>
            <div className={classes.aaa}>
                {props.title}
            </div>
            <input type={props.type} placeholder={props.title + "를 입력해 주세요."} className={classes.bbb} value={props.value} onChange={props.onChange}/>
        </div>
    );
}

export default InputTag;
