import classes from "./PublicView.module.css";

function PublicView(props) {
    return (
        <div className={classes.content}>
            <div className={classes.title}>{props.title}</div>
            <div onClick={()=>{window.location.href = props.link}} className={classes.viewMore}>전체보기></div>
        </div>
    );
}

export default PublicView;
