import classes from "./FDelete.module.css";
import {useSelector} from "react-redux";
import {userActions} from "../../../../../../store/map/user-slice";
import useHttp from "../../../../../../hooks/use-http";

function FDelete(props){
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    console.log("props= ", props)
    const handleDelete = () => {

        fetchData({url: `http://localhost:3001/store/like`, type:"delete", data:{id:props.data}}, (obj) => {
            console.log("obj = ", obj)
            props.fetch()

        })

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