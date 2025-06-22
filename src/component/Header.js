import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartCount = cartItems
    .map((item) => item?.count)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <div className="flex align-center justify-between bg-amber-50 border-0">
      <div className="imgContainer ">
        <img
          alt=""
          className="w-20  border-gray-300 rounded-xl p-2 m-2"
          src="https://images-platform.99static.com//fubAYS04oLlAJjVkhcWNohrb9vM=/0x0:2000x2000/fit-in/590x590/99designs-contests-attachments/134/134614/attachment_134614289"
        ></img>
      </div>
      <ul className="flex align-center justify-center m-2">
        <Link to="/" className="text-lg px-4 py-2 cursor-pointer">
          Home
        </Link>
        <Link to="/contact" className="text-lg px-4 py-2 cursor-pointer">
          Contact Us
        </Link>
        <Link to="/about" className="text-lg px-4 py-2 cursor-pointer">
          About Us
        </Link>
        <Link to="/cart" className="text-lg px-4 py-2 cursor-pointer">
          Cart -{cartCount} items
        </Link>
      </ul>
    </div>
  );
};

export default Header;
