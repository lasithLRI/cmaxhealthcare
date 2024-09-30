import prod from '../assets/offer4.jpg'; 

export default function AboutSection(){
    return (
        <>
            <div className="w-full h-128 flex bg-gray-100">
            
                <div className="w-1/2 h-128 flex justify-center items-center">

                    <div className="w-168 h-96 flex flex-col justify-center p-20 border-x border-x-orange-400">
                        <p className='font-bold text-2xl mb-5 text-center'>Your Trusted Health Partner</p>

                        <p className='text-justify px-5 text-gray-800'>
                        At CMAX-healthcare, we go beyond prescriptions. Our dedicated team is here to provide 
                        professional guidance tailored to your unique health needs. With easy online access and 
                        reliable home delivery, managing your health has never been simpler. Experience healthcare 
                        that truly cares for you.
                        </p>

                    </div>


                </div>

                <div className="w-1/2 h-128 flex items-center">
                    <img src={prod} alt="products-png" className='h-full w-full object-cover' />
                </div>
                
            </div>
        </>
    )
}