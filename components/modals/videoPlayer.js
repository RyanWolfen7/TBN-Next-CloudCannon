const VideoPlayerIframeModal = ({
    openModal,
    isOpen,
    videoUrl
}) => {
    if (!isOpen) return <></>

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 p-8 flex items-center justify-center bg-black bg-opacity-80" onClick={openModal}>
            <div className="animate-scaleIn animate-fadeIn duration-300 ease-in-out">
                <div className="z-50 m-0 p-0 border-0 text-base font-normal align-baseline">
                    <div className="z-40 relative w-80vw overflow-hidden">
                        <iframe
                            width="640"
                            height="360"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            src={videoUrl}
                            sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayerIframeModal
