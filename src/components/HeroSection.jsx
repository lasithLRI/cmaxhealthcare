import hero from '../assets/med1.jpg';  

export default function HeroSection() {
    return (
        <>
            <div className="w-full max-h-168 bg-orange-400 relative">
                <img src={hero} alt="Hero Image" className="w-full max-h-168 object-cover" />
                <div className="w-1/2 h-full bg-white absolute top-0 bg-opacity-50 flex items-center justify-center flex-col">
                    <p className='w-96 text-center'>
                        At <em>CMAX-healthcare</em>, we offer personalized care, fast prescription services, and expert advice to help you 
                        stay healthy and well. Convenient online ordering and home delivery make managing your medications 
                        easier than ever.
                    </p>
                    <button className='w-32 h-10 bg-orange-400 text-white mt-5 hover:bg-opacity-0 hover:border-orange-400 hover:border hover:text-black'>Read More</button>
                </div>
            </div>
        </>
    );
}
