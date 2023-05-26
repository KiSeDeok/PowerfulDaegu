import classes from "./Store.module.css"
import Content from "./Content/Content";
import {useSelector} from "react-redux";
import useHttp from "../../../../hooks/use-http";
import {useEffect, useState} from "react";

function Store(){
    const storeValue = useSelector(state => state.mapStore.search)
    const { isLoading, error, sendRequest: fetchData } = useHttp();

    const [items, setItems] = useState([])
    const items3 = [
        {
        id:0,title:"세븐일레븐 대구대봉점",
        type:"편의점",
        point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
        address:{
            doro:"대구 수성구 신천동로 294",
            jibun:"수성동1가 679-71",
            upyen:"(우)42135"
        },
        time:{
            start:"11:00",
            end:"19:00"
        },
        phone:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
        id:1,title:"세븐일레븐 대구대봉점2",
        type:"편의점",
        point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
        address:{
            doro:"대구 수성구 신천동로 294",
            jibun:"수성동1가 679-71",
            upyen:"(우)42135"
        },
        time:{
            start:"11:00",
            end:"19:00"
        },
        phone:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
        id:2,title:"세븐일레븐 대구대봉점3",
        type:"편의점",
        point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
        address:{
            doro:"대구 수성구 신천동로 294",
            jibun:"수성동1가 679-71",
            upyen:"(우)42135"
        },
        time:{
            start:"11:00",
            end:"19:00"
        },
        phone:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
        id:0,title:"세븐일레븐 대구대봉점4",
        type:"편의점",
        point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
        address:{
            doro:"대구 수성구 신천동로 294",
            jibun:"수성동1가 679-71",
            upyen:"(우)42135"
        },
        time:{
            start:"11:00",
            end:"19:00"
        },
        phone:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
        id:0,title:"세븐일레븐 대구대봉점5",
        type:"편의점",
        point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
        address:{
            doro:"대구 수성구 신천동로 294",
            jibun:"수성동1가 679-71",
            upyen:"(우)42135"
        },
        time:{
            start:"11:00",
            end:"19:00"
        },
        phone:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
        id:0,title:"세븐일레븐 대구대봉점6",
        type:"편의점",
        point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
        address:{
            doro:"대구 수성구 신천동로 294",
            jibun:"수성동1가 679-71",
            upyen:"(우)42135"
        },
        time:{
            start:"11:00",
            end:"19:00"
        },
        phone:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    },{
        id:0,title:"세븐일레븐 대구대봉점7",
        type:"편의점",
        point:[ {type:"delivery", has:true}, {type:"nice", has:true}],
        address:{
            doro:"대구 수성구 신천동로 294",
            jibun:"수성동1가 679-71",
            upyen:"(우)42135"
        },
        time:{
            start:"11:00",
            end:"19:00"
        },
        phone:"053-475-1121", startP:{x:123,y:123}, endP:{x:456,y:566}
    }]

    useEffect(() => {
        console.log("storeValue = ", storeValue)
        if(storeValue.value) {
            const region = storeValue.region.join(",");
            const type = storeValue.type.join(",")

            console.log("region= ", region)
            console.log("type= ", type)

            fetchData({url: `http://localhost:3001/store/search?storename=${storeValue.value}&region=달서구&place=분식`}, (obj) => {
                console.log("obj =", obj)
                setItems(obj)
            })
        }
    }, [storeValue])


    return (
        <div className={classes.box}>
            { items && items.length > 0 ?
                items.map((ele) => (
                <Content data={ele}/>
                ))
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
        </div>
    )
}

export default Store
