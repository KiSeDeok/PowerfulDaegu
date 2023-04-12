import classes from "./SocialBtn.module.css";

function SocialBtn(props) {
    return (
        <img className={props.round ? classes.bbb : classes.aaa} src={props.src}/>
    );
}

export default SocialBtn;
