import classes from "./FDelete.module.css";
import {useSelector} from "react-redux";
import {userActions} from "../../../../../../store/map/user-slice";
import useHttp from "../../../../../../hooks/use-http";

function FDelete(props){
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    const handleDelete = () => {
        if(props.type === "favorite") {
            fetchData({url: `http://localhost:3001/store/like`, type: "delete", data: {id: props.data}}, (obj) => {
                props.fetch()
            })
        }

        if(props.type === "path"){
            fetchData({url: `http://localhost:3001/store/direction`, type: "delete", data: {id: props.data}}, (obj) => {
                props.fetch()
            })
        }
    }

    return (
        <>
            {props.data.length > 0 ?
                <div className={classes.fFoot}>
                    <div onClick={handleDelete} className={classes.ffBox}>
                        <span>저장 삭제</span>
                    </div>
                </div> : ""
            }
        </>
    )
}

export default FDelete
