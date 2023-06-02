'use client'
import Link from 'next/link';
import { footer, company, } from '../lib/data';
import Image from 'next/image';
import tornPaperUp from '../public/effects/tornPaperUp.svg'

const Footer = () => {
    const { logo_url: logo, tbn_logo_url: tbnLogo, tbn_url: tbnUrl } = company
    const { legal: legalList, link_list: linkList, button_text: btnText, header } = footer.footer
    return (
        <>
            <div className="w-full max-h-1  flex justify-end items-end z-40">
                <Image
                    src={tornPaperUp}
                    alt="Torn Paper"
                    className='filter invert w-full h-auto z-50'
                />
            </div>
            <footer className="bg-black text-white">
                <div className="container flex flex-wrap">
                    <div className="w-full md:w-4/12 px-4">
                        <Image
                            src={logo}
                            alt="Logo"
                            className="filter invert mb-6"
                            width={100}
                            height={100}
                        />
                        {legalList?.map((paragraph, index) => (
                            <p key={`footer-legal-${index}`} className="text-xs mb-6">{paragraph}</p>
                        ))}
                    </div>
                    <div className="w-full md:w-3/12 px-4 mt-6 text-center">
                        <ul className="text-md">
                            {linkList?.map((link, index) => {
                                const { name, url } = link
                                return <li key={`footer-${name}-${index}`} className='mb-2'>{name}</li>
                            })}
                        </ul>
                    </div>
                    <div className="w-full md:w-5/12 px-4">
                        <h3 className="text-lg font-medium mb-6 text-center">{header}</h3>
                        <div className="flex mb-6">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 p-2 outline-white border border-white text-white bg-black"
                            />
                            <button className="px-2 py-2 text-white border border-white bg-black hover:bg-white hover:text-black transition-colors">
                                {btnText}
                            </button>
                        </div>
                        <Image
                            src={tbnLogo}
                            alt="Logo"
                            className="m-[auto]"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </footer>
        </>
    );
};


export default Footer
