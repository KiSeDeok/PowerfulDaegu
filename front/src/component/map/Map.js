import classes from "./Map.module.css"

import MainMap from "./MainMap";
import SideMain from "./Side/SideMain";
import MapInterface from "./MapInterface";


function Map(){
    return (
        <div className={classes.box}>
            <MainMap/>
            <SideMain/>
            <MapInterface />
        </div>
    )
}

export default Map
