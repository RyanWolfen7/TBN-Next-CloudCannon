import Image from 'next/image'
import { getCollectionItem } from '../lib/collections';
import tornPaperUp from '../public/effects/tornPaperUp.svg'
import { useState, useRef } from 'react';
import VideoPlayerIframeModal from './../components/modals/videoPlayer';
import SplashImage from './../components/SplashImage';
import WYSIWYG from './../components/wysiwyg';

export default function Home({ page, contentRef }) {
  const { splashImage, contentHtml } = page
  const [open, setOpen] = useState(false)
  const openModal = () => setOpen(!open)

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between" ref={contentRef}>
        <VideoPlayerIframeModal isOpen={open} openModal={openModal} videoUrl={splashImage.video.videoUrl} />
        <SplashImage {...splashImage} openModal={openModal}/>
        <div className="w-full z-40">
          <Image
            src={tornPaperUp}
            alt="Torn Paper"
            className='bottom-4  right-0 w-full h-36 md:h-52 lg:h-60'
          />
        </div>
      </div>
      <WYSIWYG contentHtml={contentHtml} />
    </main>
  )
}

export async function getStaticProps({ params }) {
  const page = await getCollectionItem('pages', 'index');

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
    }
  };
}
