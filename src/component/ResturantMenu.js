import {useParams} from 'react-router-dom';
import useFetchMenu from '../utils/useFetchMenu';
import MenuCatogory from './MenuCatagory';
import { useState } from 'react';

const ResturantMenu = ({ menu }) => {
// [4]?.REGULAR?.cards[2]
     
    const [showIndex, setShowIndex] = useState(0);
     const { id } = useParams();
    const menuInfo = useFetchMenu({ resturantId: id });
    const catogories = menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("Catogories Info:", menuInfo);
    
  return (
    <>
    <div className="menuHeader  flex flex-col items-center justify-center p-4 rounded-lg mb-4">
      <h1 className="text-2xl font-bold">{menuInfo[0]?.card?.card?.text}</h1>
      <p className="text-gray-600">Explore the delicious offerings from our restaurant.</p> 
      </div>
    <div className="menuContainer">
        {catogories?.map((category ,index) => (
        <MenuCatogory key={index} category = {category} showMenu={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}></MenuCatogory>
        ))}
    </div>
    </>
  );
}
export default ResturantMenu;