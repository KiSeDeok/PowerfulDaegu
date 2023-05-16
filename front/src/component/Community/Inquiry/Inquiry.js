import {useRef, useState} from "react";

import classes from "./Inquiry.module.css";

function Inquiry() {
    const [category, setCategory] = useState(0)
    const imageInput = useRef();

    function onClickFileUpload() {
        imageInput.current.click();
    }

    return (
        <>
            <div className={classes.aaa}>
                <div className={classes.bbb}>
                    1:1 문의
                </div>
                <div className={classes.ccc}>
                    궁금한 사항을 문의글로 남겨주세요.<br/>
                    질문에 대한 답변은 마이페이지>????에서 확인하실 수 있습니다.
                </div>
            </div>

            <div className={classes.ddd}>
                <div className={classes.eee}>
                    분류
                    <div className={classes.fff}>*</div>
                </div>
                <div className={classes.ggg}>
                    <div className={category === 0 ? classes.iii : classes.hhh} onClick={setCategory.bind(this, 0)}>
                        가맹점
                    </div>

                    <div className={category === 1 ? classes.iii : classes.hhh} onClick={setCategory.bind(this, 1)}>
                        길찾기
                    </div>

                    <div className={category === 2 ? classes.iii : classes.hhh} onClick={setCategory.bind(this, 2)}>
                        기타
                    </div>
                </div>
            </div>

            <div className={classes.lll}>
                <div className={classes.eee}>
                    제목
                    <div className={classes.fff}>*</div>
                </div>
                <input className={classes.jjj} placeholder="제목을 입력해주세요."/>
            </div>

            <div className={classes.lll}>
                <div className={classes.eee}>
                    내용
                    <div className={classes.fff}>*</div>
                </div>
                <textarea className={classes.kkk} placeholder="내용을 입력해주세요."/>
            </div>

            <div className={classes.lll}>
                <div className={classes.eee}>
                    첨부파일
                    <div className={classes.fff}>*</div>
                </div>

                <div className={classes.mmm} onClick={onClickFileUpload}>
                    클릭하여 파일추가
                </div>
            </div>

            <div className={classes.ooo}>
                <div className={classes.qqq}>제출</div>
            </div>
        </>
    );
}

export default Inquiry;
