import {  useEffect, useState } from 'react';
import {MENU_ITEM_CDN_URL} from './constants';

function useFetchMenu({resturantId}) {
    const [menuInfo, setMenuInfo] = useState([]);
    useEffect(() => {
        fetchMenu(resturantId);
    }, []);

    const fetchMenu = async (resturantId) => {
        try {
            const response = await fetch(`${MENU_ITEM_CDN_URL}${resturantId}`);
            const data = await response.json();
            setMenuInfo(data?.data?.cards || []);
            
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };
    return menuInfo;
}

export default useFetchMenu;