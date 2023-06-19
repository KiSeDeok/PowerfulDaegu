import classes from "./Pagination.module.css";

function Pagination(props) {
    const numberRendering = () => {
        const result = [];
        for (let i = 1; i <= props.totalPage; i++) {
            result.push(<div onClick={props.setPage.bind(this, i)} className={props.page === i ? classes.pageActive : classes.pageDisable} key={i}>{i}</div>);
        }
        return result;
    };

    return (
        <div className={classes.content}>
            <div onClick={props.page === 1 ? props.setPage.bind(this, props.page) : props.setPage.bind(this, props.page - 1)} className={props.page === 1 ? classes.leftArrowDisable : classes.leftArrowActive}/>
            {numberRendering()}
            <div onClick={props.page === props.totalPage ? props.setPage.bind(this, props.page) : props.setPage.bind(this, props.page + 1)} className={props.page === props.totalPage ? classes.rightArrowDisable : classes.rightArrowActive}/>
        </div>
    );
}

export default Pagination;
