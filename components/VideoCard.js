import Image from 'next/image';
import Link from 'next/link';

const VideoCard = ({ video }) => {
    return (
        <div className="relative">
            <div className="relative">
                <div className="group cursor-pointer">
                    <Link href={video.video}>
                        <div className="absolute top-0 left-0 w-full h-full bg-main bg-opacity-40 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                        <Image src={video.thumbnailUrl} alt="Thumbnail" width={500} height={300} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <div className="w-16 h-16 border-white border-2 rounded-full flex items-center justify-center mb-6 group-hover:bg-main group-hover:border-main">
                                <button className="text-white text-2xl ml-1.5 ">
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
                    </Link>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">{video.title}</h2>
                <p className="text-gray-500">{video.description}</p>
            </div>
        </div>
    );
};

export default VideoCard;
