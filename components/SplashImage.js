import Image from 'next/image'
const SplashImage = ({
    imageUrl,
    header,
    timeSlot,
    openModal,
    subtext,
    video
}) => {

    return (
        <div className='h-20'>
            <Image
                src={imageUrl}
                alt="Your Image"
                fill
                className="bg-no-repeat bg-cover bg-tornBottem"
            />
            <div className={`bg-fuchsia-300/50 absolute inset-0 flex items-center justify-center`}>
                <div className={`bg-slate-600/40 absolute inset-0 flex items-center justify-center`}>
                    <div className="flex flex-col items-center justify-center h-screen">
                        <h1 className="text-6xl sm:text-9xl font-bold mb-8 text-outlined-white mt-8 editable text-center" data-cms-bind="splashImage.header"> {header} </h1>
                        <h2 className="text-xl sm:text-4xl mb-16 tracking-wide text-white editable" data-cms-bind="splashImage.timeSlot">{timeSlot}</h2>
                        {video.videoUrl && <>
                            <div className="w-16 h-16 border-white border-2 rounded-full flex items-center justify-center mb-6" onClick={openModal}>
                                <button className="text-white text-2xl ml-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M3 22v-20l18 10-18 10z" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-md sm:text-lg text-white quote editable" data-cms-bind="splashImage.subtext">{subtext}</p>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashImage
