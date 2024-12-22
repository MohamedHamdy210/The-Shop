/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";
export const ShopContext = createContext({
  products: [],
  cart: [],
  addToCart: () => {},
  delFromCart: () => {},
});

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        } else {
          setLoading(false);
          return response.json();
        }
      })
      .then((response) => setProducts(response));
  }, []);
  const addToCart = (id, amount) => {
    const index = cart.findIndex((item) => item.id === id);

    index === -1
      ? setCart((prev) => [...prev, { id, amount }])
      : setCart((prev) => [...prev.toSpliced(index, 1, { id, amount })]);
  };
  const delFromCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    setCart((prev) => [...prev.toSpliced(index, 1)]);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ShopContext.Provider
          value={{ products, cart, addToCart, delFromCart }}
        >
          <Home />
        </ShopContext.Provider>
      ),
    },
    {
      path: "/Products",
      element: (
        <ShopContext.Provider
          value={{ products, cart, addToCart, delFromCart }}
        >
          <Products />
          {loading && <h2>Loading</h2>}
        </ShopContext.Provider>
      ),
    },
    {
      path: "/cart",
      element: (
        <ShopContext.Provider
          value={{ products, cart, addToCart, delFromCart }}
        >
          <Cart />
        </ShopContext.Provider>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
