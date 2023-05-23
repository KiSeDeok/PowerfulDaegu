import React, { useEffect, useRef } from 'react';

const CustomOverlay = ({ position, map }) => {
    const overlayRef = useRef(null);

    useEffect(() => {
        const overlay = new window.naver.maps.OverlayView();

        overlay.setPosition(position);
        overlay.setMap(map);

        overlay.onAdd = function() {
            const pane = this.getPanes().overlayLayer;
            pane.appendChild(overlayRef.current);
        };

        overlay.draw = function() {
            const projection = this.getProjection();
            const pixelPosition = projection.fromCoordToOffset(position);

            if (pixelPosition && overlayRef.current) {
                overlayRef.current.style.left = `${pixelPosition.x}px`;
                overlayRef.current.style.top = `${pixelPosition.y}px`;
            }
        };

        overlay.onRemove = function() {
            const pane = this.getPanes().overlayLayer;
            pane.removeChild(overlayRef.current);
        };

        return () => {
            overlay.setMap(null);
        };
    }, [position, map]);

    return (
        <div
            ref={overlayRef}
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '120px',
                height: '30px',
                lineHeight: '30px',
                textAlign: 'center',
                backgroundColor: '#fff',
                border: '2px solid #f00',
            }}
        >
            커스텀 오버레이
        </div>
    );
};

export default CustomOverlay
