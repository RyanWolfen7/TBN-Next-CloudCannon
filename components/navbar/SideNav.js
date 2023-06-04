import Image from 'next/image';
import React, { useEffect } from 'react';
import { company, navigation } from '@/lib/data';
import Link from 'next/link';
import SearchBar from '../inputs/SearchBar';

const SideDrawerNav = ({ isOpen, onHandle }) => {
    const { social_media: socialMediaList, logo_url: logo } = company
    const links = navigation.links.sort((a, b) => a.side_nav_order - b.side_nav_order)

    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    
    return (
        <div className={`z-50 fixed inset-0 w-screen h-screen justify-center items-center ${isOpen ? 'visible' : 'invisible'}`}>
            <div className={`fixed inset-0 bg-black cursor-pointer opacity-50 ${isOpen ? 'visible' : 'invisible'}`} onClick={onHandle}></div>
            <div className={`fixed inset-y-0 left-0 w-full lg:w-6/12  bg-secondary shadow-lg transform transition-transform ease-in-out duration-300 pt-8 pr-8 pl-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'} text-white`}>
                <div className='text-end text-4xl pr-1 w-full h-fit'>
                    <div className='mb-6 cursor-pointer hover:text-black' onClick={onHandle}> X </div>
                </div>
                <div className="container mx-auto flex items-center justify-around py-4 mr-6">
                    <Image
                        src={logo}
                        alt="Home"
                        width={100}
                        height={75}
                        className={`lg: mr-4 h-10 filter invert`}
                    />
                    <nav role="navigation" id="block-socialmenu">
                        <ul className="flex space-x-4 text-center">
                            {socialMediaList?.map((socialMedia, index) => {
                                const {
                                    name,
                                    disk_image_url: bgImage,
                                    ref_url: href,
                                    in_social_media_section: isHere
                                } = socialMedia
                                if (!isHere) return null

                                return (
                                    <li key={`${name}-${index}`}>
                                        <a href={href} target="_blank">
                                            <Image
                                                width={35}
                                                height={35}
                                                alt={name}
                                                src={bgImage}
                                                className='filter invert'
                                            />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div className='mt-5'>
                    <div className='container mx-auto items-center justify-start py-4'>
                        <nav>
                            <ul>
                                {links.map((link, index) => {
                                    if (link.side_nav_order <= 0) return null
                                    const { name, url } = link
                                    return (
                                        <li key={`side-nav-${name}-${index}`} className='block text-lg font-bold leading-10 tracking-wider border-b border-white border-opacity-30 uppercase py-2'>
                                            <Link href={url} className='font-normal text-md tracking-widest' onClick={onHandle}>
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    <SearchBar onHandle={onHandle}/>
                </div>
            </div>
        </div>
    );
};

export default SideDrawerNav;
