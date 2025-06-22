import {  useEffect, useState } from 'react';
import {LISTING_URL} from './constants';

function useFetchRestaurants() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(LISTING_URL);
            const data = await response.json();
            setRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants|| []);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };
    return restaurants;
}

export default useFetchRestaurants;
