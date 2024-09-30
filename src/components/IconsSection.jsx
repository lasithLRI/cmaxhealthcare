export default function IconsSection(){
    return(
        <>
        
        <div className="w-full h-auto my-10 ">
            <div className="max-w-7xl h-28  mx-auto flex justify-evenly">
                
                <button className="w-full h-full hover:text-orange-400 border-r-2 border-orange-400">
                    <i class="ri-building-4-fill text-4xl"></i>
                    <br/> 
                    <p className="font-light">Locations</p>
                </button>

                <button className="w-full h-full hover:text-orange-400 border-r-2 border-orange-400">
                <i class="ri-team-fill text-4xl"></i>
                    <br/> 
                    <p className="font-light">Our team</p>
                </button>

                <button className="w-full h-full hover:text-orange-400 border-r-2 border-orange-400">
                <i class="ri-global-fill text-4xl"></i>
                    <br/> 
                    <p className="font-light">Countries</p>
                </button>

                <button className="w-full h-full hover:text-orange-400">
                <i class="ri-shake-hands-fill text-4xl"></i>
                    <br/> 
                    <p className="font-light">Locations</p>
                </button>
                
            </div>
        </div>
        
        </>
    )
}