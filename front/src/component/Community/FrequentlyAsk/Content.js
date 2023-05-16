import classes from "./Content.module.css";

function Content(props) {
    return (
        <div className={classes.bbb}>
            <div className={classes.ccc}  onClick={props.content.id === props.active ? props.setActive.bind(this, 0) : props.setActive.bind(this, props.content.id)}>
                <div className={classes.ddd}>
                    <div className={classes.eee}>
                        Q.{props.content.category}
                    </div>
                    <div className={classes.fff}>
                        {props.content.question}
                    </div>
                </div>
                <img className={classes.ggg} src={props.content.id === props.active ? '/icon/upArrow_active.png' : '/icon/downArrow_active.png'}/>
            </div>

            {
                props.content.id === props.active ? <div className={classes.hhh}> {props.content.answer} </div> : <></>
            }
        </div>
    );
}

export default Content;
