import React from 'react';

type OverlayProps = { open: boolean };

const Overlay = ({ open }: OverlayProps) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-black opacity-60 ${
                open ? 'scale-x-100' : 'scale-y-0'
            } duration-500 origin-top`}
        ></div>
    );
};

export default Overlay;
