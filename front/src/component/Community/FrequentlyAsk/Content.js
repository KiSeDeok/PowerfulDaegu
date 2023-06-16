import classes from "./Content.module.css";

function Content(props) {
    function checkBoxHandler(event) {
        event.preventDefault();
        props.checkHandler(props.checked, props.content.id)
    }

    return (
        <div className={classes.content}>
            <div className={classes.detail}  onClick={props.content.id === props.active ? props.setActive.bind(this, 0) : props.setActive.bind(this, props.content.id)}>
                <div className={classes.leftArea}>
                    <div className={props.checked ? classes.checkBoxChecked : classes.checkBoxDefault} onClick={checkBoxHandler}>
                        <div/>
                    </div>
                    <div className={classes.category}>
                        Q.{props.content.category}
                    </div>
                    <div className={classes.question}>
                        {props.content.question}
                    </div>
                </div>
                <img className={classes.rightArea} src={props.content.id === props.active ? '/icon/upArrow_active.png' : '/icon/downArrow_active.png'}/>
            </div>

            {
                props.content.id === props.active ? <div className={classes.answer}> {props.content.answer} </div> : <></>
            }
        </div>
    );
}

export default Content;
