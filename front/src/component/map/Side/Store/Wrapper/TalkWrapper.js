import {useSelector} from "react-redux";
import TalkModal from "../Modal/TalkModal";

function TalkWrapper() {
    const modalOpen = useSelector((state) => state.mapModal.talkModal);


    return modalOpen?.open ? <TalkModal/> : null;
}

export default TalkWrapper
