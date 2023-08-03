import TalkWriteWrapper from "./Side/Store/Wrapper/TalkWriteWrapper";
import TalkWrapper from "./Side/Store/Wrapper/TalkWrapper";
import WarningWrapper from "./Main/Modal/Wrapper/WarningWrapper";

function ModalSet(){
    return (
        <>
            <TalkWriteWrapper/>
            <TalkWrapper/>
            <WarningWrapper/>
        </>
    )
}

export default ModalSet
