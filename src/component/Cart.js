import { useSelector } from "react-redux";
import ItemList from "./ItemList"; // Assuming ItemList is a component that displays individual items
import { IMAGE_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice"; // Assuming clearCart is an action to clear the cart
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center bg-gray-50 w-6/12 m-auto">
      {cartItems.length > 0 ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 my-4">Your Cart</h1>
          <a
            className="bg-blue-500 hover:bg-blue-700"
            onClick={() => dispatch(clearCart())} // Assuming clearCart is an action to clear the cart
          >
            Clear cart
          </a>

          {cartItems?.map((item) => (
            <div
              className="item-card items-center p-8 align-center py-1 border-white-200 flex justify-between border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 m-2"
              key={item.id}
            >
              <div className="w-9/12 " key={item?.id}>
                <span className="text-bold mb-4 my-4">{item?.count} *</span>
                <span className="p-1">{item?.name}</span> -
                <span className="text-gray-600"> ₹ {item?.price}</span>
                <p className="text-gray-400 text-wrap">{item?.description}</p>
              </div>
              <div className="w-3/12 relative inline-block">
                <img
                  src={
                    item?.imageId
                      ? `${IMAGE_CDN_URL}${item?.imageId}`
                      : "https://via.placeholder.com/150"
                  }
                  alt={item?.name}
                  className="w-full h-40 object-cover rounded-lg"
                ></img>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600">
            Add some items to your cart to see them here.
          </p>
        </div>
      )}
    </div>
  );
};
export default Cart;
