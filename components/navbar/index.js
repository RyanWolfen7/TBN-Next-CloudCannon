'use client'
import Image from "next/image";
import {usePathname} from 'next/navigation'
import { useEffect, useState } from 'react';
import { navigation, company } from '../../lib/data'

const NavBar = ({

}) => {
    const pathname = usePathname()
    const [color, setColor] = useState({
        text: 'text-black',
        image: '',
        bg: 'bg-black'
    })

    useEffect(() => {
        const light = ['/contact', '/', '/keep-talking']
        if(light.filter(path => path === pathname).length > 0) {
            setColor({
                text: 'text-white',
                image: 'filter invert',
                bg: "bg-white"
            })
        }
    },[pathname])

    return (
        <div className="sticky top-0 z-50">
            <div className="flex justify-center">
                <div className="flex items-center justify-between py-2 px-6 w-10/12">
                    <div className="flex items-center m-4">
                        <a href="/" className={`editable mr-4 ${color.text}`}>
                            <Image
                                src={company.logo_url}
                                alt="Home"
                                width={100}
                                height={20}
                                className={`mr-4 h-10 ${color.image}`}
                            />
                        </a>
                    </div>
                    <div className="editable flex items-center gap-12">
                        {navigation.mainNav.links.map((link, index) => (
                            <a data-cms-bind={navigation.mainNav.links[index].name} href={link.url} key={`${link.name}-${index}`} className={`editable ${color.text} !important mx-4 hover:text-gray-200`}>
                                {link.name.toUpperCase()}
                            </a>
                        ))}
                        <button className={`${color.text} ml-4 p-1 hover:text-gray-200`}>
                            <div className="space-y-2">
                                <span className={`block w-5 h-0.5 ${color.bg} !important`}></span>
                                <span className={`block w-5 h-0.5 ${color.bg}  !important`}></span>
                                <span className={`block w-5 h-0.5 ${color.bg}  !important`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
