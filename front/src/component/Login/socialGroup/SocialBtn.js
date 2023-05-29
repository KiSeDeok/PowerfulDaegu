import classes from "./SocialBtn.module.css";

function SocialBtn(props) {
    return (
        <img className={props.round ? classes.roundArea : classes.defaultArea} src={props.src}/>
    );
}

export default SocialBtn;
