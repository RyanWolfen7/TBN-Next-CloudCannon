import React, { useEffect, useRef, useState } from 'react';
import useDynamicColor from './../../lib/hooks/useDynamicColor';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigation, company } from '../../lib/data';
import Link from 'next/link';
import SideNav from './SideNav';

const defaultColor = {
    text: 'text-black',
    image: '',
    bg: 'bg-black',
    width: 'w-4'
}

const updatedColor = {
    text: 'text-white',
    image: 'filter invert',
    bg: 'bg-white',
    width: 'w-4'
}

const NavBar = () => {
    const pathname = usePathname();
    const [color, setColor] = useState(defaultColor);
    const [sideNav, setSideNav] = useState(false)
    const navbarRef = useDynamicColor({ setColor, defaultColor, updatedColor})
    const links = navigation.links.sort((a,b) => a.main_nav_order - b.main_nav_order)


    useEffect(() => {
        const light = ['/contact', '/', '/keep-talking'];
        light.includes(pathname) ? setColor(updatedColor) : setColor(defaultColor)
    }, [pathname]);

    const handleMouseHamburger = (event) => {
        const bg = color.bg == 'bg-purple-400' ? 'bg-black' : 'bg-purple-400'
        const width = event.type == 'mouseenter' ?  'w-6'  : 'w-4' 
        setColor({ ...color, ...{ bg, width } })
    }

    const handleSideNav = () => setSideNav(!sideNav)

    return (
        <div ref={navbarRef} className="sticky top-0 z-50 max-h-20">
            <SideNav isOpen={sideNav} onHandle={handleSideNav}/>
            <div className="flex justify-center">
                <div className="flex items-center justify-between py-2 px-6 w-10/12">
                    <Link href="/" className={`mr-md-4 ${color.text}`}>
                        <Image
                            src={company.logo_url}
                            alt="Home"
                            width={115}
                            height={20}
                            className={`lg: mr-4 h-10 ${color.image}`}
                        />
                    </Link>
                    {navigation.links.map((link, index) => {
                        if(link.main_nav_order <= 0) return null
                        return (
                            <Link href={link.url} key={`${link.name}-${index}`} className={`${color.text} !important hidden sm:block mx-4 hover:text-purple-400`}>
                                {link.name.toUpperCase()}
                            </Link>
                        )
                    })}
                    <button className={`${color.text} ml-4 hover:text-black space-y-2 transition-all duration-300 ease-in-out`} onMouseEnter={handleMouseHamburger} onMouseLeave={handleMouseHamburger} onClick={handleSideNav}>
                            <span className={`block ${color.width} h-0.5 ${color.bg} !important`}></span>
                            <span className={`block w-6 h-0.5 ${color.bg}  !important`}></span>
                            <span className={`block w-6 h-0.5 ${color.bg}  !important`}></span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default NavBar;
