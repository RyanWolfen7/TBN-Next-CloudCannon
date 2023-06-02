import React, { useEffect } from 'react';

const SideDrawerNav = ({ isOpen, onHandle }) => {
    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);                                                                                            

    return (
        <div className={`z-50 fixed inset-0 w-screen h-screen flex justify-center items-center ${isOpen ? 'visible' : 'invisible'}`}>
            <div className={`fixed inset-0 bg-black opacity-50 ${isOpen ? 'visible' : 'invisible'}`} onClick={onHandle}></div>
            <div className={`fixed inset-y-0 left-0 w-1/2 bg-secondary shadow-lg transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

            </div>
        </div>
    );
};

export default SideDrawerNav;
