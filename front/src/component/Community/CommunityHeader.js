import { Link } from "react-router-dom";

import classes from "./CommunityHeader.module.css";

function CommunityHeader(props) {
    return (
        <>
            <div className={classes.content}>
                <div className={classes.headText}>
                    커뮤니티
                </div>

                <div className={classes.categoryArea}>
                    <Link to="/community/notice" className={props.selector === "notice" ? classes.categoryActive : classes.categoryDefault} onClick={props.setSelector.bind(this, "notice")}>
                        공지
                    </Link>
                    <Link to="/community/feq" className={props.selector === "feq" ? classes.categoryActive : classes.categoryDefault} onClick={props.setSelector.bind(this, "feq")}>
                        자주 묻는 질문
                    </Link>
                    <Link  to="/community/inquiry" className={props.selector === "inquiry" ? classes.categoryActive : classes.categoryDefault} onClick={props.setSelector.bind(this, "inquiry")}>
                        1:1 문의
                    </Link>
                    <Link className={classes.categoryDefault}>
                        현장 토크
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CommunityHeader;
