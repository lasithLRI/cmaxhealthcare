import medProd from '../assets/medProd1.jpeg'

export default function FeaturedProductCard(){
    return(
        <>
            <div className="w-64 h-full border">
                <div className="w-full h-3/4">

                    <img src={medProd} alt="" className='w-full h-full object-cover'/>
                
                </div>
                <div className="w-full h-1/4 flex flex-col items-center justify-center my-5">
                
                    <p className='font-bold'>Zimacal 30mg</p>
                    <p className='text-sm text-gray-400'><em>by Rthofortin</em></p>
                
                </div>
            </div>
        </>
    )
}