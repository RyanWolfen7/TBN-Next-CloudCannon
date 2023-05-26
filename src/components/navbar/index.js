import Image from "next/image";

const NavBar = () => {
    return (
        <div class="flex justify-center">
            <div class="flex items-center justify-between py-4 px-6 bg-blue-500 w-10/12">
                <div class="flex items-center m-4">
                    <a href="/" class="mr-4 text-white">
                        <Image
                            src="https://www.bettertogether.tv/sites/default/files/better-together-final_BW.png"
                            alt="Home"
                            width={100}
                            height={20}
                            className="h-10 filter invert"
                        />
                    </a>
                </div>
                <div class="flex items-center">
                    <a href="/" class="text-white mx-4 hover:text-gray-200">
                        Button 1
                    </a>
                    <a href="/" class="text-white mx-4 hover:text-gray-200">
                        Button 2
                    </a>
                    <a href="/" class="text-white mx-4 hover:text-gray-200">
                        Button 3
                    </a>
                    <button class="text-white ml-4 p-1 hover:text-gray-200">
                        <div class="space-y-2">
                            <span class="block w-5 h-0.5 bg-white"></span>
                            <span class="block w-8 h-0.5 bg-white"></span>
                            <span class="block w-8 h-0.5 bg-white"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
