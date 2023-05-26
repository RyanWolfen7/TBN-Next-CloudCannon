import Image from "next/image";

const NavBar = ({
    isDark
}) => {

    return (
        <div className="sticky top-0 z-50">
            <div className="flex justify-center">
                <div className="flex items-center justify-between py-4 px-6 w-10/12">
                    <div className="flex items-center m-4">
                        <a href="/" className={`mr-4 text-${isDark ? "black" : "white"}`}>
                            <Image
                                src="https://www.bettertogether.tv/sites/default/files/better-together-final_BW.png"
                                alt="Home"
                                width={100}
                                height={20}
                                className={`mr-4 ${isDark ? "" : "h-10 filter invert"}`}
                            />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href="https://shop.bettertogether.tv/?utm_campaign=BT22-SHOP-0001&utm_source=Btsite-Header&utm_medium=web&utm_content=header" className={`text-${isDark ? "black" : "white"} mx-4 hover:text-gray-200`}>
                            SHOP
                        </a>
                        <a href="/watch" className={`text-${isDark ? "black" : "white"} mx-4 hover:text-gray-200`}>
                            WATCH
                        </a>
                        <a href="https://www.tbn.org/bettertogether?_gl=1*k0j2vp*_ga*NDc5NjE4NjYxLjE2ODUxMzA1MTk.*_ga_93P5W4NV2P*MTY4NTEzNzg1MC4yLjEuMTY4NTEzNzg1Ni4wLjAuMA.." className={`text-${isDark ? "black" : "white"} mx-4 hover:text-gray-200`}>
                            GIVE
                        </a>
                        <button className={`text-${isDark ? "black" : "white"} ml-4 p-1 hover:text-gray-200`}>
                            <div className="space-y-2">
                                <span className={`block w-5 h-0.5 bg-${isDark ? "black" : "white"}`}></span>
                                <span className={`block w-5 h-0.5 bg-${isDark ? "black" : "white"}`}></span>
                                <span className={`block w-5 h-0.5 bg-${isDark ? "black" : "white"}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
