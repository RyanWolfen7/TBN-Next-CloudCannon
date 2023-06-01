import Image from 'next/image'
import { landingPage } from '../lib/data'
import { getCollectionItem } from '../lib/collections';
import tornPaperUp from '../public/effects/tornPaperUp.svg'
import { useState, useRef } from 'react';

export default function Home({page, pageData}) {
  const { heroImage } = page
  const [open, setOpen] = useState(false)
  // const modalRef = useRef(null);
  console.log(open)
  const openModal = () => setOpen(!open)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {open && <div className="fixed top-0 left-0 right-0 bottom-0 z-50 p-8 flex items-center justify-center bg-black bg-opacity-80" onClick={openModal}>
        <div className="animate-scaleIn animate-fadeIn duration-300 ease-in-out">
          <div className="z-50 m-0 p-0 border-0 text-base font-normal align-baseline">
            <div className="z-40 relative w-80vw overflow-hidden">
              <iframe
                width="640"
                height="360"
                allow="autoplay; fullscreen"
                allowFullScreen
                src={heroImage.video.videoUrl}
                sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
              />
            </div>
          </div>
        </div>
      </div> }
      <div className='editable h-20'  data-cms-bind="heroImage.imageUrl">
        <Image
          src={heroImage.imageUrl}
          alt="Your Image"
          fill
          className="bg-no-repeat bg-cover bg-tornBottem"
        />
        <div className={`bg-fuchsia-300/50 absolute inset-0 flex items-center justify-center`}>
          <div className={`bg-slate-600/40 absolute inset-0 flex items-center justify-center`}>
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-9xl font-bold mb-8 text-outlined-white mt-8 editable" data-cms-bind="heroImage.header"> {heroImage.header} </h1>
              <h2 className="text-4xl mb-16 tracking-wide text-white editable" data-cms-bind="heroImage.timeSlot">{heroImage.timeSlot}</h2>
              <div className="w-16 h-16 border-white border-2 rounded-full flex items-center justify-center mb-6" onClick={openModal}>
                <button className="text-white text-2xl ml-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M3 22v-20l18 10-18 10z" />
                  </svg>
                </button>
              </div>
              <p className="text-lg text-white quote editable" data-cms-bind="heroImage.subtext">{heroImage.subtext}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full z-40">
        <Image
          src={tornPaperUp}
          alt="Torn Paper"
          className='bottom-4 mb-11 right-0 w-full h-50'
        />
      </div>
    </main>
  )
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'index');
	
	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			pageData: landingPage
		}
	};
}
