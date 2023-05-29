import classes from './PagingBtn.module.css';

function PagingBtn(props) {
    return (
        <div className={props.color === "black" ? classes.blackBtn : classes.disableBtn} onClick={() => window.location.href = props.link}>
            {props.name}
        </div>
    );
}

export default PagingBtn;
