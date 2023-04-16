import classes from "./CommunityHeader.module.css";

function CommunityHeader(props) {
    return (
        <>
            <div className={classes.aaa}>
                <div className={classes.bbb}>
                    커뮤니티
                </div>

                <div className={classes.ccc}>
                    <div className={props.selector === "notice" ? classes.eee : classes.ddd}>
                        공지
                    </div>
                    <div className={classes.ddd}>
                        자주 묻는 질문
                    </div>
                    <div className={classes.ddd}>
                        1:1 문의
                    </div>
                    <div className={classes.ddd}>
                        현장 토크
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommunityHeader;
