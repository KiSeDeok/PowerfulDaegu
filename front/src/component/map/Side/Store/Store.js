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
    const items3 = [
        {
        id:0,name:"세븐일레븐 대구대봉점",
        store_type:{category:"편의점"},
        point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
        street_address:"대구 수성구 신천동로 294",
        city_code:"(우)42135",
        detail_address:"수성동1가 679-71",
        address:{
            doro:"대구 수성구 신천동로 294",
            jibun:"수성동1가 679-71",
            upyen:"(우)42135"
        },
        time:{
            start:"11:00",
            end:"19:00"
        },
        phone_number:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
            id:0,name:"세븐일레븐 대구대봉점",
            store_type:{category:"편의점"},
            point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
            street_address:"대구 수성구 신천동로 294",
            city_code:"(우)42135",
            detail_address:"수성동1가 679-71",
            address:{
                doro:"대구 수성구 신천동로 294",
                jibun:"수성동1가 679-71",
                upyen:"(우)42135"
            },
            time:{
                start:"11:00",
                end:"19:00"
            },
            phone_number:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
            id:0,name:"세븐일레븐 대구대봉점",
            store_type:{category:"편의점"},
            point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
            street_address:"대구 수성구 신천동로 294",
            city_code:"(우)42135",
            detail_address:"수성동1가 679-71",
            address:{
                doro:"대구 수성구 신천동로 294",
                jibun:"수성동1가 679-71",
                upyen:"(우)42135"
            },
            time:{
                start:"11:00",
                end:"19:00"
            },
            phone_number:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
            id:0,name:"세븐일레븐 대구대봉점",
            store_type:{category:"편의점"},
            point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
            street_address:"대구 수성구 신천동로 294",
            city_code:"(우)42135",
            detail_address:"수성동1가 679-71",
            address:{
                doro:"대구 수성구 신천동로 294",
                jibun:"수성동1가 679-71",
                upyen:"(우)42135"
            },
            time:{
                start:"11:00",
                end:"19:00"
            },
            phone_number:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
            id:0,name:"세븐일레븐 대구대봉점",
            store_type:{category:"편의점"},
            point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
            street_address:"대구 수성구 신천동로 294",
            city_code:"(우)42135",
            detail_address:"수성동1가 679-71",
            address:{
                doro:"대구 수성구 신천동로 294",
                jibun:"수성동1가 679-71",
                upyen:"(우)42135"
            },
            time:{
                start:"11:00",
                end:"19:00"
            },
            phone_number:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
            id:0,name:"세븐일레븐 대구대봉점",
            store_type:{category:"편의점"},
            point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
            street_address:"대구 수성구 신천동로 294",
            city_code:"(우)42135",
            detail_address:"수성동1가 679-71",
            address:{
                doro:"대구 수성구 신천동로 294",
                jibun:"수성동1가 679-71",
                upyen:"(우)42135"
            },
            time:{
                start:"11:00",
                end:"19:00"
            },
            phone_number:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
            id:0,name:"세븐일레븐 대구대봉점",
            store_type:{category:"편의점"},
            point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
            street_address:"대구 수성구 신천동로 294",
            city_code:"(우)42135",
            detail_address:"수성동1가 679-71",
            address:{
                doro:"대구 수성구 신천동로 294",
                jibun:"수성동1가 679-71",
                upyen:"(우)42135"
            },
            time:{
                start:"11:00",
                end:"19:00"
            },
            phone_number:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    }]

    useEffect(() => {
        if(storeValue.value) {
            const region = storeValue.region.join(",");
            const type = storeValue.type.join(",")

            console.log(region)
            console.log(type)

            fetchData({url: `http://localhost:3001/store/search?storename=${storeValue.value}&region=${region}&place=`}, (obj) => {
                console.log("obj =", obj)

                if(obj.stores.length > 0) {
                    const updatedStore = obj.stores?.map((item) => {
                        const foundLike = obj.like?.find((likeItem) => likeItem.id === item.id);
                        return {
                            ...item,
                            favorite: !!foundLike, // true if foundLike is truthy, false otherwise
                        };
                    });

                    console.log("updatedStore =" , updatedStore)

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
