import classes from "./Store.module.css"
import Content from "./Content";

function Store(){
    const nowDate = new Date()

    const items = [{
        title:"세븐일레븐 대구대봉점",
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
        phone:"053-475-1121"
    },{
        title:"세븐일레븐 대구대봉점",
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
        phone:"053-475-1121"
    },{
        title:"세븐일레븐 대구대봉점",
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
        phone:"053-475-1121"
    },{
        title:"세븐일레븐 대구대봉점",
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
        phone:"053-475-1121"
    },{
        title:"세븐일레븐 대구대봉점",
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
        phone:"053-475-1121"
    },{
        title:"세븐일레븐 대구대봉점",
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
        phone:"053-475-1121"
    },{
        title:"세븐일레븐 대구대봉점",
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
        phone:"053-475-1121"
    }]

    return (
        <div className={classes.box}>
            {items.map((ele) => (
                <Content data={ele}/>
            ))}
        </div>

    )
}

export default Store
