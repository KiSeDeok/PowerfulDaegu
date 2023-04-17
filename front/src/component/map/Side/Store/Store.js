import classes from "./Store.module.css"

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
                <div className={classes.content}>
                    <div className={classes.left}>
                        <div className={classes.titleDiv}>
                            <span>{ele.title}</span>
                            <lable>{ele.type}</lable>
                        </div>
                        <div>
                            {true ?? <div className={classes.open}><span>영업 중</span></div>}
                            {ele.point[0].has ?? <div className={classes.delivery}><span>배달º포장</span></div>}
                            {ele.point[1].has ?? <div className={classes.nice}><span>선한영향력가게</span></div>}
                        </div>
                        <div>
                            <img />
                            <div>
                                <div>
                                    <span>{ele.address.doro}</span>
                                    <label>{ele.address.upyen}</label>
                                </div>
                                <span>{ele.address.jibun}</span>
                            </div>
                        </div>
                        <div>
                            <img />
                            <span>11:00 ~ 19:00</span>
                        </div>
                        <div>
                            <img />
                            <span>{ele.address.phone}</span>
                        </div>
                    </div>
                    <div className={classes.right}>

                    </div>
                </div>
            ))}
        </div>

    )
}

export default Store
