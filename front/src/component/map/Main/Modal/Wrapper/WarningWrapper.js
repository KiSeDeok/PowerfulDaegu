import {useSelector} from "react-redux";
import Warning from "../Warning";

function WarningWrapper() {
    const modalOpen = useSelector((state) => state.mapModal.warningModal);

    return modalOpen ? <Warning/> : null;
}

export default WarningWrapper
