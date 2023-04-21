import classes from "./Pagination.module.css";
import {useState} from "react";

function Pagination(props) {
    const [page, setPage] = useState(props.nowPage)

    const numberRendering = () => {
        const result = [];
        for (let i = 1; i <= props.totalPage; i++) {
            result.push(<div onClick={setPage.bind(this, i)} className={page === i ? classes.ddd : classes.eee} key={i}>{i}</div>);
        }
        return result;
    };


    return (
        <div className={classes.aaa}>
            <div onClick={page === 1 ? setPage.bind(this, page) : setPage.bind(this, page - 1)} className={page === 1 ? classes.fff : classes.bbb}/>

            {numberRendering()}

            <div onClick={page === props.totalPage ? setPage.bind(this, page) : setPage.bind(this, page + 1)} className={page === props.totalPage ? classes.ggg : classes.ccc}/>
        </div>
    );
}

export default Pagination;
