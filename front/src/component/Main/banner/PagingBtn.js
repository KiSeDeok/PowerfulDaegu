import classes from './PagingBtn.module.css';

function PagingBtn(props) {
    return (
        <div className={classes.aaa} onClick={() => window.location.href = props.link}>
            <div className={classes.bbb}/>
            {props.name}
        </div>
    );
}

export default PagingBtn;
