import classes from "./SideMap.module.css"
import Store from "./Store/Store";
import {useDispatch, useSelector} from "react-redux";
import {mapActions} from "../../../store/map/map-slice";
import {useState} from "react";
import SearchModal from "./SearchModal";
import Load from "./Load/Load";
import Save from "./Save/Save";

function SideMain(){
    const dispatch = useDispatch()
    const pageIndex = useSelector(state => state.map.index)
    const [isSearchSet, setSearchOpen] = useState(false)
    const [searchRegion, setSearchRegion] = useState(["중구","동구","북구","남구","서구","수성구","달서구","달성군"])
    const [type, setType] = useState(["음식점","편의점","푸드 코트","지역 아동센터","주민 센터","사회 복지관"])

    // 사이드바 활성화 여부
    const [sideOpen, setSideOpen] = useState(true)

    const handleIndex = (index) => {
        dispatch(mapActions.handleIndex({index:index}))
    }

    const handleSearchRegion = (ele) => {
        setSearchRegion(ele)
    }

    const handleSearchType = (ele) => {
        setType(ele)
    }

    const handleSearchOpt = () => {
        const state = isSearchSet
        setSearchOpen(!state)
    }

    const handleOpen = () => {
        setSideOpen(!sideOpen)
    }

    const handleSearch = (e) => {
        if(e.key === "Enter" || e.keyCode === 13){
            dispatch(mapActions.handleIndex({index:0}))
            dispatch(mapActions.handleSearch({value:e.target.value, region:searchRegion, type:type}))
        }
    }

    return (
        <div className={sideOpen ? classes.box : classes.unOpenBox}>
            <div className={classes.logoBox}><span>Logo</span></div>
            <div className={classes.searchBox}>
                <div className={classes.searchLeftBox}><img src={"/images/map/searchLeft.svg"}/></div>
                <div className={classes.inputBox}>
                    <input onKeyDown={(e) => handleSearch(e)}/>
                </div>
                <div className={isSearchSet ? classes.searchOptActiveBox : classes.searchOptBox} onClick={handleSearchOpt}><img src={isSearchSet ? "/images/map/searchOpt_active.svg" : "/images/map/searchOpt.svg"}/></div>
                <SearchModal isSearchSet={isSearchSet} region={searchRegion} type={type} setRegion={handleSearchRegion} setType={handleSearchType} setOpen={handleSearchOpt}/>
            </div>
            <div className={classes.categoryBox}>
                <div className={pageIndex === 0 ? classes.activeCategory : ""} onClick={() => handleIndex(0)}><span>스토어 검색</span></div>
                <div className={pageIndex === 1 ? classes.activeCategory : ""} onClick={() => handleIndex(1)}><span>길찾기</span></div>
                <div className={pageIndex === 2 ? classes.activeCategory : ""} onClick={() => handleIndex(2)}><span>저장</span></div>
            </div>
            <div className={classes.contentBox}>
                {pageIndex === 0 ?
                    <Store /> : pageIndex === 1 ?
                    <Load/> :
                    <Save />
                }
            </div>
            <div className={sideOpen ? classes.foldBtn : classes.unFoldBtn} onClick={handleOpen}>
                <img src={"/images/map/sideFoldArrow.svg"}/>
            </div>
        </div>
    )
}

export default SideMain
