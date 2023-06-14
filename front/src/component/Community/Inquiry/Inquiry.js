import {useRef, useState} from "react";
import AWS from "aws-sdk";

import classes from "./Inquiry.module.css";

function Inquiry() {
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [category, setCategory] = useState(0)
    const imageInput = useRef();

    function onClickFileUpload() {
        imageInput.current.click();
    }

    function saveNoticeTitle(event) {
        setTitle(event.target.value)
    }

    function saveNoticeDetail(event) {
        setDetail(event.target.value)
    }

    const uploadS3 = (formData) => {
        const REGION = "ap-northeast-2"
        const ACESS_KEY_ID = "AKIASJILGE6DZWIMYXLF"
        const SECRET_ACESS_KEY_ID = "Q1x1y/O7qIEL0FOEpN3atSkAxjgeRO6bedXaLNTZ"

        AWS.config.update({
            region: REGION,
            accessKeyId: ACESS_KEY_ID,
            secretAccessKey: SECRET_ACESS_KEY_ID,
        });

        const upload = new AWS.S3.ManagedUpload({
            params: {
                ACL: 'public-read',
                Bucket: '버킷명',
                Key: `upload/${formData.name}`,
                Body: formData,
            }
        })

        upload.promise()
            .then(
                console.log('업로드')
            )
    }

    return (
        <>
            <div className={classes.header}>
                <div className={classes.title}>
                    1:1 문의
                </div>
                <div className={classes.detail}>
                    궁금한 사항을 문의글로 남겨주세요.<br/>
                    질문에 대한 답변은 마이페이지>????에서 확인하실 수 있습니다.
                </div>
            </div>

            <div className={classes.categoryArea}>
                <div className={classes.categoryTitle}>
                    분류
                    <div>*</div>
                </div>
                <div className={classes.categoryBtnArea}>
                    <div className={category === 0 ? classes.categoryBtnActive : classes.categoryBtnDefault} onClick={setCategory.bind(this, 0)}>
                        가맹점
                    </div>

                    <div className={category === 1 ? classes.categoryBtnActive : classes.categoryBtnDefault} onClick={setCategory.bind(this, 1)}>
                        길찾기
                    </div>

                    <div className={category === 2 ? classes.categoryBtnActive : classes.categoryBtnDefault} onClick={setCategory.bind(this, 2)}>
                        기타
                    </div>
                </div>
            </div>

            <div className={classes.inputTitle}>
                <div className={classes.categoryTitle}>
                    제목
                    <div>*</div>
                </div>
                <input className={classes.inputBox} placeholder="제목을 입력해주세요."  onChange={saveNoticeTitle}/>
            </div>

            <div className={classes.inputTitle}>
                <div className={classes.categoryTitle}>
                    내용
                    <div>*</div>
                </div>
                <textarea className={classes.textArea} placeholder="내용을 입력해주세요."  onChange={saveNoticeDetail}/>
            </div>

            <div className={classes.inputTitle}>
                <div className={classes.categoryTitle}>
                    첨부파일
                    <div>*</div>
                </div>

                <div className={classes.fileUploadBtn}>
                    클릭하여 파일추가
                </div>
            </div>

            <div className={classes.submitArea}>
                <span className={classes.submitBtnActive}>제출</span>
            </div>
        </>
    );
}

export default Inquiry;
