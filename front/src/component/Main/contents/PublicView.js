import classes from "./PublicView.module.css";

function PublicView(props) {
    return (
        <div className={classes.aaa}>
            <div className={classes.bbb}>{props.title}</div>
            <div onClick={()=>{window.location.href = props.link}} className={classes.ccc}>전체보기></div>
        </div>
    );
}

export default PublicView;
