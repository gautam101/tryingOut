
import {IMAGE_CDN_URL} from "../utils/constants";
const RestaurantCard = ({restaurant}) =>{
     console.log(restaurant);
    if (!restaurant) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }
    
    // Check if restaurant data is available
    if (!restaurant?.info) {
        return <div className="flex justify-center items-center h-screen">No restaurant data available</div>;
    }
    const {id ,name, cuisines, avgRating, cloudinaryImageId} = restaurant?.info;

   return (<div key={id} >
                        <div className="align-center "><img className="rounded-xl w-full h-[200px] " src={cloudinaryImageId ? IMAGE_CDN_URL + cloudinaryImageId : "https://via.placeholder.com/150"} alt={name} /></div>
                        <div className="h-3/12"><h2 className="font-bold mt-2">{name}</h2>
                        <p className="text-gray-600">{cuisines.join(", ")}</p>
                        <p className="text-gray-500">Rating: {avgRating}</p>
                        </div>
                    </div>)
   
}

export default RestaurantCard;