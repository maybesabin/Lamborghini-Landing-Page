import Socials from './Socials';
import Footer from './Footer';
import image1 from '../assets/bgphoto.jpg'
import { useGSAP } from '@gsap/react';

const frontpage = () => {
    useGSAP(() => {
        gsap.fromTo(
            "#page1 .third-animation",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1.5 }
        );
        gsap.fromTo(
            "#page1 .second-animation",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5 }
        );
    }, [])

    return (
        <div id='page1' className='overflow-hidden relative w-full h-full flex items-center justify-center'>
            <div className='w-[90rem] flex items-center justify-start relative h-full'>
                <div className={`absolute top-50 left-50 z-[992] w-full flex items-center justify-center`}>
                    <img className='image h-full object-cover w-full bg-transparent' src={image1} alt="" />
                </div>

                <div className='second-animation absolute z-[990] flex items-center justify-center w-full ml-4 mt-[-15rem] '>
                    <h1 className=' text-[12.5rem] text-[#0e1116] font-bold tracking-[2rem]'>
                        HURACAN
                    </h1>
                </div>

                <div className='third-animation ml-[-3rem] flex flex-col items-start justify-center gap-6 mt-[-15rem] z-[991] w-[400px] text-zinc-400'>
                    <p>
                        The Huracan EVO is the evolution of the most successful V10 powered Lamborghini ever.
                    </p>

                    <div className='text-zinc-300 flex items-center gap-3 tracking-widest'>
                        <button>EXPLORE MORE</button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="white" fill="none">
                            <path d="M16.5 7.5L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='third-animation z-[991] absolute right-10'>
                <Socials />
            </div>

            <div className='third-animation z-[991] absolute bottom-10 left-0 w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default frontpage;