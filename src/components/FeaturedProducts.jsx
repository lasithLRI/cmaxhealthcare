import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProducts(){
    return(
        <>
            <div className="w-full h-auto my-8">
                <p className="text-lg text-gray-500 ml-5">Fetured products : </p>

                <div className="w-full h-full flex justify-between px-32 mt-4">
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                    <FeaturedProductCard></FeaturedProductCard>
                </div>
            </div>
        </>
    )
}