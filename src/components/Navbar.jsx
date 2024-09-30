import logo from '../assets/logo.png'
import name from '../assets/name1.png'

export default function Navbar(){
    return(
        <>
        
        <div className="w-full h-20 bg-white flex justify-between  top-0 sticky z-10">
            <div className="w-auto h-full flex items-center ml-10">
                <img src={logo} alt="" className='w-full h-full object-fill' />
                <img src={name} alt="" className='w-full h-14 object-fill ml-4'/>
            </div>
            <div className="w-auto h-full flex items-center mr-12">
                <ul className="flex">
                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-red-600">
                        <a href="">Home</a>
                    </li>

                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-red-600">
                        <a href="">Products</a>
                    </li>

                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-red-600">
                        <a href="">Partners</a>
                    </li>

                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-red-600">
                        <a href="">Branches</a>
                    </li>

                    <li className="mr-10 hover:text-gray-400 cursor-pointer active:text-red-600">
                        <a href="">About</a>
                    </li>

                    <li className="hover:text-gray-400 cursor-pointer active:text-red-600">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}