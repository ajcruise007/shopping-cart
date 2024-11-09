import { useEffect, useReducer } from "react";
import "./App.css";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, { products: [], cart: [] });

  console.log(state);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };
  return (
    <div style={{display: "flex"}}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
