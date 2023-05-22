import {useSelector} from "react-redux";
import TalkWriteModal from "../Modal/TalkWriteModal";

function TalkWriteWrapper() {
    const modalOpen = useSelector((state) => state.mapModal.talkWriteModal);

    return modalOpen?.open ? <TalkWriteModal/> : null;
}

export default TalkWriteWrapper
