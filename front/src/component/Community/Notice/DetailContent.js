import {Link} from "react-router-dom";
import {useEffect, useState, useContext} from "react";

import useHttp from "../../../hooks/use-http";

import classes from "./DetailContent.module.css";
import {AppContext} from "../../../App";

function DetailContent() {
    const {serverUrl} = useContext(AppContext)
    const { isLoading, error, sendRequest: fetchData } = useHttp()

    const [category, setCategory] = useState("")
    const [detail, setDetail] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        if(!error) return
        switch (error.request.responseURL) {
            case serverUrl:
                break
            default:
                return
        }
    }, [error, serverUrl]);

    useEffect(() => {
        const url = window.location.href
        const splitUrl = url.split('/')
        const location = splitUrl[splitUrl.length - 1]

        fetchData({
            url: serverUrl + 'notice/' + location,
            type:'get'
        }, (data) => {
            setCategory(data.notice.category === "inspection" ? "점검" : "안내")
            setTitle(data.notice.title)
            setDate(data.notice.createdAt.slice(0, 10).replaceAll("-", "."))
            setDetail(data.notice.content)
        }).catch(error => {

        })
    }, [])

    return (
        <div className={classes.content}>
            <div className={classes.communityHeader}>
                <div className={classes.communityHeaderTitle}>공지</div>

                <Link to={"/community/notice"} className={classes.removeLine}>
                    <div className={classes.backArrowDefault}/>
                    <div className={classes.backArrowText}>목록으로</div>
                </Link>
            </div>

            <div className={classes.noticeHeader}>
                <div className={classes.removeLine}>
                    <div className={classes.category}>{category}</div>
                    <div className={classes.title}>{title}</div>
                </div>

                <div className={classes.date}>{date}</div>
            </div>

            <div className={classes.detail}>{detail}</div>
        </div>
    );
}

export default DetailContent;
