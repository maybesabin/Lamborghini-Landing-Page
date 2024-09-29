import { useGSAP } from '@gsap/react';

const navbar = () => {

    useGSAP(() => {
        gsap.fromTo(
            "#navbar",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, delay: 1.75 }
        );
    })

    return (
        <div id='navbar' className="w-full h-12 fixed bg-transparent top-10 z-[999]">
            <div className="flex items-center bg-transparent flex-row-reverse justify-between px-12">
                <div className="border bg-black rounded-full p-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                        <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <h1 className="text-4xl cursor-pointer" style={{ fontFamily: 'La Macchina' }}>Lamborghini</h1>
            </div>
        </div>
    )
}

export default navbar;