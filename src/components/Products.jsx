import { ShopContext } from "../App";
import { useContext } from "react";
import Card from "./Card";
import portrait from "../assets/portrait.png";

export default function Products() {
  const { products } = useContext(ShopContext);
  const cardElements = products.map((p) => <Card {...p} key={p.id} />);
  return (
    <div className="page">
      <div className="banner flex">
        <h1>NEW YEAR <br />COLLECTION</h1>
      </div>
      <div className="flex">
        <div className="cards">{cardElements} </div>
        <div className="portrait"><img src={portrait} /></div>
      </div>
    </div>
  );
}
