import '../index.css'

const socials = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-12 text-zinc-300 scatter">
            <i className="text-[1.25rem] cursor-pointer fa-brands fa-facebook-f"></i>
            <i className="text-[1.25rem] cursor-pointer fa-brands fa-instagram"></i>
            <i className="text-[1.25rem] cursor-pointer fa-brands fa-x-twitter"></i>
        </div>
    )
}

export default socials;