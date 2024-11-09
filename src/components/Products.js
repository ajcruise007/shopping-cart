import React from "react";

const Products = ({ state, dispatch }) => {
  console.log(state);

  const { products, cart } = state;

  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {products.map((product) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ height: 200, objectFit: "cover" }}
          ></img>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{product.title}</span>
            <b>$ {product.price}</b>
          </div>

          {cart.some((p) => p.id === product.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#e53935",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: { id: product.id },
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    qty: 1,
                    price: product.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
