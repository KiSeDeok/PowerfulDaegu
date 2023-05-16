import {useState} from "react";

import classes from "./Pagination.module.css";

function Pagination(props) {
    const [page, setPage] = useState(props.nowPage)

    const numberRendering = () => {
        const result = [];
        for (let i = 1; i <= props.totalPage; i++) {
            result.push(<div onClick={setPage.bind(this, i)} className={page === i ? classes.pageActive : classes.pageDisable} key={i}>{i}</div>);
        }
        return result;
    };

    return (
        <div className={classes.content}>
            <div onClick={page === 1 ? setPage.bind(this, page) : setPage.bind(this, page - 1)} className={page === 1 ? classes.leftArrowDisable : classes.leftArrowActive}/>
            {numberRendering()}
            <div onClick={page === props.totalPage ? setPage.bind(this, page) : setPage.bind(this, page + 1)} className={page === props.totalPage ? classes.rightArrowDisable : classes.rightArrowActive}/>
        </div>
    );
}

export default Pagination;
