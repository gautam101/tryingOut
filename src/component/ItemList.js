import { IMAGE_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    const itemData = {
      id: item?.card?.info.id,
      name: item?.card?.info.name,
      price: item?.card?.info.price
        ? item?.card?.info.price / 100
        : item?.card?.info.defaultPrice / 100,
      description: item?.card?.info.description,
      imageId: item?.card?.info.imageId,
      count: 1,
    };
    dispatch(addItem(itemData));
  };
  return (
    <div className="item-list">
      {items?.map((item) => (
        <div
          className="item-card items-center p-8 align-center py-1 border-white-200 flex justify-between border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 m-2"
          key={item?.card?.info.id}
        >
          <div className="w-9/12 " key={item?.card?.info.id}>
            <span className="p-1">{item?.card?.info.name}</span> -
            <span className="text-gray-600">
              {" "}
              ₹{" "}
              {item?.card?.info.price
                ? item?.card?.info.price / 100
                : item?.card?.info.defaultPrice / 100}
            </span>
            <p className="text-gray-400 text-wrap">
              {item?.card?.info.description}
            </p>
          </div>
          <div className="w-3/12 relative inline-block">
            <img
              src={
                item?.card?.info.imageId
                  ? `${IMAGE_CDN_URL}${item?.card?.info.imageId}`
                  : "https://via.placeholder.com/150"
              }
              alt={item?.card?.info.name}
              className="w-full h-40 object-cover rounded-lg"
            ></img>
            <button
              className="absolute bottom-0 right-12 bg-white text-green px-4 w-[100px] py-2 rounded shadow-md hover:bg-gray-200"
              onClick={() => handleClick(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
