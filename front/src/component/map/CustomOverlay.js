import React, { useEffect, useRef } from 'react';
import classes from "./CustomOverlay.module.css"
import {useSelector} from "react-redux";

const CustomOverlay = ({ position, type, data }) => {
    const overlayRef = useRef(null);
    const overlay = useRef(null);
    const map = useSelector(state => state.map.naverMap)

    // 현재 내 위치로 이동
    if(type === "myLocation"){
        map.setCenter(position)
    }

    useEffect(() => {
        overlay.current = new window.naver.maps.OverlayView();

        overlay.current.onAdd = function() {
            const pane = this.getPanes().overlayLayer;
            pane.appendChild(overlayRef.current);
        };

        overlay.current.draw = function() {
            const projection = this.getProjection();
            const pixelPosition = projection.fromCoordToOffset(position);

            if (pixelPosition && overlayRef.current) {
                overlayRef.current.style.left = `${pixelPosition.x}px`;
                overlayRef.current.style.top = `${pixelPosition.y}px`;
            }
        };

        overlay.current.onRemove = function() {
            overlayRef.current.parentNode.removeChild(overlayRef.current);
        };

        overlay.current.setMap(map);

        return () => {
            overlay.current.setMap(null);
        };
    }, [position, map]);

    return (
        <div className={classes.box} ref={overlayRef}>
            {data &&
            <div className={classes.detailBox}>
                <div className={classes.imgBox}>
                    {data?.img ?
                        <img />
                        :
                        <div className={classes.nonImgBox}>
                            <img />
                        </div>
                    }
                    <img/>
                </div>
                <div className={classes.content}>
                    <span>CU 대구대봉점</span>
                    <label>편의점</label>
                    <label>편의점</label>
                </div>
                <div className={classes.square}></div>
            </div>
            }
        </div>
    );
};

export default CustomOverlay
