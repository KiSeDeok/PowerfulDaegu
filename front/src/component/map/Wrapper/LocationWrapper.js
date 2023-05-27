import {useSelector} from "react-redux";
import CustomOverlay from "../CustomOverlay";
import React from "react";

function LocationWrapper() {
    const location = useSelector((state) => state.map.location);

    console.log("location= ", location)

    return location?.latitude && location?.longitude ? <CustomOverlay
        position={new window.naver.maps.LatLng(location.latitude, location.longitude)}
        type="myLocation"
    /> : null;
}

export default LocationWrapper
