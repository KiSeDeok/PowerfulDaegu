import classes from "./Map.module.css"

import MainMap from "./MainMap";
import SideMain from "./Side/SideMain";


function Map(){
    return (
        <div className={classes.box}>
            <MainMap/>
            <SideMain/>
        </div>
    )
}

export default Map
