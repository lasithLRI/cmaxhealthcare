
export default function Navbar(){
    return(
        <>
        
        <div className="w-full h-20 bg-gray-100 flex justify-between  top-0 sticky z-10">
            <div className="w-32 h-full bg-orange-400 ml-20"></div>
            <div className="w-auto h-full flex items-center mr-12">
                <ul className="flex">
                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-orange-400">
                        <a href="">Home</a>
                    </li>

                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-orange-400">
                        <a href="">Products</a>
                    </li>

                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-orange-400">
                        <a href="">Partners</a>
                    </li>

                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-orange-400">
                        <a href="">Branches</a>
                    </li>

                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-orange-400">
                        <a href="">About</a>
                    </li>

                    <li className="hover:text-gray-400 cursor-pointer active:text-orange-400">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}