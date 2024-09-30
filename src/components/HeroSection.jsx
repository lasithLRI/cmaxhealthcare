import hero from '../assets/heroimage.jpg';  

export default function HeroSection() {
    return (
        <>
            <div className="w-full max-h-144 relative">
                <img src={hero} alt="Hero Image" className="w-full max-h-144 object-cover" />
                <div className="w-1/3 bg-cyan-600 h-full absolute top-0 bg-opacity-50 flex items-center justify-center flex-col text-white">
                    <p className='w-96 text-center'>
                        At <em>CMAX-healthcare</em>, we offer personalized care, fast prescription services, and expert advice to help you 
                        stay healthy and well. Convenient online ordering and home delivery make managing your medications 
                        easier than ever.
                    </p>
                    <button className='w-32 h-10 bg-red-600 text-white mt-5 hover:bg-opacity-0 hover:border-orange-400 hover:border hover:text-black'>Read More</button>
                </div>
            </div>
        </>
    );
}
