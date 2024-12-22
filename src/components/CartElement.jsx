/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { ShopContext } from "../App";
import bin from "../assets/delete.svg";
export default function CartElement(props) {
  const { addToCart, delFromCart } = useContext(ShopContext);
  const [cartAmount, setCartAmount] = useState(props.amount);

  function add() {
    setCartAmount((prev) => prev + 1);
    addToCart(props.id, cartAmount + 1);
  }
  function sub() {
    if (cartAmount > 0) {
      setCartAmount((prev) => prev - 1);
      addToCart(props.id, cartAmount - 1);
    }
  }
  function del() {
    delFromCart(props.id);
  }

  return (
    <div className="cartElement">
      <div className="cartTitle">
        <img src={props.image} alt={props.title} />
        <h6>{props.title}</h6>
      </div>
      <div className="cartAmount">
        <img className="pointer" src={bin} onClick={del} />
        <img src={minus} className="pointer" onClick={sub} />
        <input type="number" disabled value={cartAmount} name="amount" />
        <img src={plus} onClick={add} className="pointer" />
      </div>
    </div>
  );
}
