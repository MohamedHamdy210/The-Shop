import { ShopContext } from "../App";
import { useContext } from "react";
import CartElement from "./CartElement";
import NavBar from "./NavBar";

export default function Cart() {
  let total = 0;
  const { cart, products } = useContext(ShopContext);
  const cartElements = cart.map((item) => {
    const product = products.filter((prod) => prod.id === item.id)[0];
    total += product.price * item.amount;
    return <CartElement key={item.id} {...product} amount={item.amount} />;
  });
  return (
    <>
      <div className="cartPage">
        <div className="cart">
          {cartElements}
          <h3>total: {total.toFixed(2)}$</h3>
          <button className="pointer">CheckOut</button>
        </div>
      </div>
    </>
  );
}
