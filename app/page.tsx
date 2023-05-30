import Image from 'next/image'
import tornPaper from '../public/effects/tornPaperDown.svg'
import tornPaperUp from '../public/effects/tornPaperUp.svg'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='h-20'>
        <Image
          src="https://www.bettertogether.tv/sites/default/files/2019-04/Video_0.png"
          alt="Your Image"
          fill
          className=" bg-no-repeat bg-cover bg-tornBottem"
        />
        <div className={`bg-fuchsia-300/50 absolute inset-0 flex items-center justify-center`}>
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="editable text-9xl font-bold mb-4">Header</h1>
            <h2 className="editable text-4xl mb-4">Times</h2>
            <div className="editable w-16 h-16 border-white border-2 rounded-full flex items-center justify-center mb-4">
              <button className="editable text-white text-2xl ml-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
              </button>
            </div>

            <p className="text-lg text-gray-600">Cursef Subtext</p>
          </div>
        </div>
      </div>
      <div className="w-full z-40">
        <Image
          src={tornPaperUp}
          alt="Torn Paper"
          className='bottom-4 mb-12 right-0 w-full h-50'
        />
      </div>
    </main>
  )
}
