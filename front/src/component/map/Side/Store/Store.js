import classes from "./Store.module.css"
import Content from "./Content/Content";
import {useSelector} from "react-redux";
import useHttp from "../../../../hooks/use-http";
import {v4 as uuidv4} from "uuid";
import {useEffect, useState} from "react";

function Store(){
    const storeValue = useSelector(state => state.mapStore.search)
    const { isLoading, error, sendRequest: fetchData } = useHttp();
    const [load, setLoad] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        if(storeValue.value) {
            const region = storeValue.region.join(",");
            const type = storeValue.type.join(",")

            fetchData({url: `http://localhost:3001/store/search?storename=${storeValue.value}&region=${region}&place=`}, (obj) => {
                if(obj.stores.length > 0) {
                    const updatedStore = obj.stores?.map((item) => {
                        const foundLike = obj.like?.find((likeItem) => likeItem.id === item.id);
                        return {
                            ...item,
                            favorite: !!foundLike, // true if foundLike is truthy, false otherwise
                        };
                    });


                    setItems(updatedStore)
                }
                else if(obj.length === 0){
                    setItems([false])
                }
                setLoad(true)
            })
        }

        else{
            setLoad(true)
        }
    }, [storeValue])


    return (
        <>
        {
            load ?
                <div className={classes.box}>
                    {items && items.length > 0 && items[0] !== false ?
                        items.map((ele) => (
                            <Content key={uuidv4()} data={ele}/>
                        ))
                    :
                    items[0] === false ?
                        <div>no contents</div>
                    :
                        <div className={classes.fBox}>
                            <div className={classes.fbContent}>
                                <span>맛있는 한끼식사! <br/>오늘은 어디로 떠나볼까요?</span>
                                <label>장소, 주소, 키워드를 검색해 보세요</label>
                            </div>
                            <div className={classes.fbImg}>
                                <img src={"/images/map/storeBackground.svg"}/>
                            </div>
                        </div>

                    }
                </div> : ""
        }
        </>
    )
}

export default Store
