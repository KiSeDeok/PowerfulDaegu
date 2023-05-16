import classes from "./CommunityHeader.module.css";
import { Link } from "react-router-dom";

function CommunityHeader(props) {
    return (
        <>
            <div className={classes.aaa}>
                <div className={classes.bbb}>
                    커뮤니티
                </div>

                <div className={classes.ccc}>
                    <Link to="/community/notice" className={props.selector === "notice" ? classes.eee : classes.ddd} onClick={props.setSelector.bind(this, "notice")}>
                        공지
                    </Link>
                    <Link to="/community/feq" className={props.selector === "feq" ? classes.eee : classes.ddd} onClick={props.setSelector.bind(this, "feq")}>
                        자주 묻는 질문
                    </Link>
                    <Link  to="/community/inquiry" className={props.selector === "inquiry" ? classes.eee : classes.ddd} onClick={props.setSelector.bind(this, "inquiry")}>
                        1:1 문의
                    </Link>
                    <Link className={classes.ddd}>
                        현장 토크
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CommunityHeader;
