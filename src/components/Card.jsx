/* eslint-disable react/prop-types */
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { useState } from "react";
import cartLogo from "../assets/cart-outline.svg";
import { useContext } from "react";
import { ShopContext } from "../App";
export default function Card(props) {
  const { addToCart } = useContext(ShopContext);
  const [amount, setAmount] = useState(0);
  const add = () => {
    setAmount((prev) => prev + 1);
  };
  const sub = () => {
    if (amount > 0) {
      setAmount((prev) => prev - 1);
    }
  };
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="cardInfo">
        <div className="hide">
          <h3>{props.title}</h3>
        </div>
        <div className="price">
          <h4>{props.price}$</h4>
        </div>
      </div>
      <p className="hide">{props.description}</p>
      <div className="amount">
        <div className="amountIn">
          <img src={minus} className="pointer" onClick={sub} />
          <input type="number" disabled value={amount} name="amount" />
          <img src={plus} className="pointer" onClick={add} />
        </div>
        <button
          className="pointer"
          onClick={() => {
            if (amount > 0) {
              setAmount(0);
              addToCart(props.id, amount);
            }
          }}
        >
          Add To Cart <img src={cartLogo} alt="" />{" "}
        </button>
      </div>
    </div>
  );
}
