import React, { useEffect, useRef, useState } from 'react';
import useDynamicColor from './../../lib/hooks/useDynamicColor';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigation, company } from '../../lib/data';
import Link from 'next/link';

const defaultColor = {
    text: 'text-black',
    image: '',
    bg: 'bg-black',
}

const updatedColor = {
    text: 'text-white',
    image: 'filter invert',
    bg: 'bg-white',
}

const NavBar = () => {
    const pathname = usePathname();
    const [color, setColor] = useState(defaultColor);
    const navbarRef = useDynamicColor({ setColor, defaultColor, updatedColor});


    useEffect(() => {
        const light = ['/contact', '/', '/keep-talking'];
        if (light.includes(pathname)) {
            setColor({
                text: 'text-white',
                image: 'filter invert',
                bg: 'bg-white',
            });
        }
    }, [pathname]);

    return (
        <div ref={navbarRef} className="sticky top-0 z-50">
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
                    {navigation.mainNav.links.map((link, index) => (
                        <Link href={link.url} key={`${link.name}-${index}`} className={`${color.text} !important hidden sm:block mx-4 hover:text-gray-200`}>
                            {link.name.toUpperCase()}
                        </Link>
                    ))}
                    <button className={`${color.text} ml-4 p-1 hover:text-gray-200`}>
                        <div className="space-y-2">
                            <span className={`block w-4 h-0.5 ${color.bg} !important`}></span>
                            <span className={`block w-5 h-0.5 ${color.bg}  !important`}></span>
                            <span className={`block w-6 h-0.5 ${color.bg}  !important`}></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
