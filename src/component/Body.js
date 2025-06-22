import { Link } from "react-router-dom";
import useFetchRestaurants from "../utils/useFetchRestuarnts";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const restaurants = useFetchRestaurants();
  console.log(restaurants);
  if (restaurants.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  return (
    <div className="body justify-center ">
      <div className=" m-2 p-2 flex items-center">
        <input
          type="text"
          placeholder="Search for products"
          className="border border-gray-300 rounded px-4 py-2 mr-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Search
        </button>
      </div>

      <div className="restaurantContainer flex flex-wrap justify-center bg-gray-100 border-8 border-gray-200 p-4 rounded-lg">
        {restaurants.map((restaurant) => (
          <div
            className="restaurantCard flex-wrap w-2/12 m-2 p-2 border-amber-50 rounded-3xl shadow-lg hover:bg-gray-300"
            key={restaurant.info.id}
          >
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;
