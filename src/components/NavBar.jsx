import logo from "../assets/shopping.svg";
import cartLogo from "../assets/cart-outline.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";
const NavBar = () => {
  const { cart } = useContext(ShopContext);
  const navigate = useNavigate();
  const homeB = () => {
    navigate("/");
  };
  const productsB = () => {
    navigate("/products");
  };
  const cartB = () => {
    navigate("/cart");
  };
  return (
    <header className="flex-bar">
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <h2>The Shop</h2>
        <button className="pointer" onClick={homeB}>
          Home
        </button>
        <button onClick={productsB} className="pointer">
          Products
        </button>
      </div>
      <div onClick={cartB} className="nav-right pointer">
        <img src={cartLogo} alt="cart " />
        <span>{cart.length}</span>
      </div>
    </header>
  );
};
export default NavBar;
