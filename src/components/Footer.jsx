export default function Footer(){
    return(
        <>
        
            <div className="w-full h-auto bg-gray-100 py-20 px-96 flex flex-col justify-between ">
                <div className="flex justify-between">
                    <div className="w-auto h-auto">
                        <p>Product Categories</p>
                        <ul className="text-sm mt-3 flex flex-col items-center">
                            <li>
                                <a href="">category 1</a>
                            </li>

                            <li>
                                <a href="">category 2</a>
                            </li>

                            <li>
                                <a href="">category 3</a>
                            </li>

                            <li>
                                <a href="">category 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-auto h-auto ">
                        <p>Our Partnes</p>
                        <ul className="text-sm mt-3 flex flex-col items-center">
                            <li>
                                <a href="">Partner 1</a>
                            </li>

                            <li>
                                <a href="">Partner 2</a>
                            </li>

                            <li>
                                <a href="">Partner 3</a>
                            </li>

                            <li>
                                <a href="">Partner 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-auto h-auto">
                        <p>Delivery Network</p>
                        <ul className="text-sm mt-3 flex flex-col items-center">
                            <li>
                                <a href="">Anuradhapura</a>
                            </li>

                            <li>
                                <a href="">Colombo</a>
                            </li>

                            <li>
                                <a href="">Gall</a>
                            </li>

                            <li>
                                <a href="">Jaffna</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-auto h-auto">
                        <p>Services</p>
                        <ul className="text-sm mt-3 flex flex-col items-center">
                            <li>
                                <a href="">About us</a>
                            </li>

                            <li>
                                <a href="">Contact us</a>
                            </li>

                            <li>
                                <a href="">Our team</a>
                            </li>

                            <li>
                                <a href="">Join with us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-auto h-auto">
                        <div className="flex">
                            <div className="flex flex-col items-end">
                                <p className="text-lg">CMAX-Healthcare  (pvt) ltd </p>
                                <p className="text-sm mt-2">077 123 1231 / 011 234 5678 / 011 245 567</p>
                                <p className="text-sm">cmaxhealthcare@gmail.com</p>
                                <p className="text-sm">20,Galle Road,Colombo 3</p>
                                <p className="text-sm">Sri Lanka</p>
                                
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="w-full h-full flex items-center text-sm text-gray-400 mt-10 flex-col">
                <p>&copy; 2024 CMAX Healthcare. All rights reserved.</p>
                <p>20, Galle Road, Colombo 3, Sri Lanka</p>
                </div>    

            </div>
            

            
        
        </>
    )
}