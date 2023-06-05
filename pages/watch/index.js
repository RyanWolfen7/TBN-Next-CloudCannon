import { getCollectionItem } from "@/lib/collections";
import { videos } from '../../lib/data'
import Carousel from './../../components/paginators/Carousel';
import filterBySeason from './../../lib/helpers/filterBySeason';
import sluggify from './../../lib/helpers/slugify';
import { useState } from "react";
import VideoCard from './../../components/VideoCard';

const WatchPage = ({ page, videos }) => {
    const { promotedListItems, header, subText } = page
    const [selectedSeason, setSelectedSeason] = useState(0)
    const filteredVideosBySeason = filterBySeason(videos, 5)
    return (
        <div className="-mt-20">
            <div className="p-20 bg-tan">
                <Carousel videos={videos} promotedVideos={promotedListItems} />
            </div>
            <div className="flex flex-col items-center justify-center h-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">{header}</h1>
                <button className="relative inline-flex items-center font-medium text-black hover:text-main focus:outline-none group">
                    <span className="relative">
                        {subText}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main origin-left transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 ml-1 fill-current" viewBox="0 0 24 24">
                        <path d="M13 4l-1.41 1.41L17.17 11H4v2h13.17l-5.58 5.59L13 20l8-8z" />
                    </svg>
                </button>
            </div>
            <div className="my-16 md:px-36 grid text-center md:flex flex-wrap justify-center md:justify-between md:space-x-5 md:text-xl">
                {filteredVideosBySeason.map((season, index) => (
                    <button 
                        key={`season-${season.season}`}
                        onClick={() => setSelectedSeason(index)}
                        className=""
                    >
                        SEASON {season.season}
                    </button>
                ))}
            </div>
            <div className="grid md:grid-cols-3 space-x-12 px-20 mt-8">
                {filteredVideosBySeason[selectedSeason].episodes.map(episode => {
                    const {number, title, description, video, thumbnailUrl } = episode
                    return (
                        <div key={`${sluggify(title)}-${number}`}> 
                            <VideoCard video={episode} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WatchPage

export async function getStaticProps({ params }) {
    const page = await getCollectionItem('pages', 'watch');

    return {
        props: {
            page: JSON.parse(JSON.stringify(page)),
            videos: videos
        }
    };
}
