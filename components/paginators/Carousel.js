import Image from 'next/image';
import { useState } from 'react';

const Carousel = ({ videos }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleNext = () => {
        setSelectedImage((prevSelectedImage) =>
            prevSelectedImage === videos.length - 1 ? 0 : prevSelectedImage + 1
        );
    };

    const handlePrevious = () => {
        setSelectedImage((prevSelectedImage) =>
            prevSelectedImage === 0 ? videos.length - 1 : prevSelectedImage - 1
        );
    };

    return (
        <div className="relative">
            <div className="flex justify-center items-center h-72">
                <button
                    onClick={handlePrevious}
                    className="bg-gray-800 text-white rounded-full p-2 focus:outline-none absolute left-0 transition-colors hover:bg-white hover:text-transparent"
                >
                    &lt;
                </button>
                <div className="relative w-full">
                    <div className="flex justify-center items-center h-full">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className={`absolute transform transition-all duration-500 ${index === selectedImage ? 'scale-100' : 'scale-90'
                                    } ${index !== selectedImage && 'opacity-0'}`}
                            >
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                    <div className="w-16 h-16 border-white border-2 rounded-full flex items-center justify-center mb-6 hover:border-main">
                                        <button className="text-white text-2xl ml-1.5 group-hover:text-transparent">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 transition-colors"
                                            >
                                                <path d="M3 22v-20l18 10-18 10z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <Image
                                    src={video.thumbnailUrl}
                                    alt={`Image ${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="p-0 m-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    className="bg-gray-800 text-white rounded-full p-2 focus:outline-none absolute right-0 transition-colors hover:bg-white hover:text-transparent"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
