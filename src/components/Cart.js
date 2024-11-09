import React, { useState } from "react";

const Cart = ({ state, dispatch }) => {
  //   const [total, setTotal] = useState(0);
  const { cart } = state;
  const calculateTotal = () => {
    if (state.cart.length === 0) return;

    return cart.reduce((acc, cur) => Number(cur.price * cur.qty) + acc, 0);
  };
  const changeQty = (prodId, qty) => {
    dispatch({ type: "CHANGE_CART_QTY", payload: { id: prodId, qty: qty } });
  };
  return (
    <div
      style={{
        width: "20%",
        backgroundColor: "#ececec",
        display: "flex",
        flexDirection: "column",
        margin: 10,
        padding: 10,
      }}
    >
      <b style={{ alignItems: "center" }}>Cart</b>
      <b style={{ alignItems: "center" }}>Subtotal: ${calculateTotal()}</b>

      {cart.length > 0 ? (
        <div>
          {cart.map((prod) => (
            <div
              key={prod.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  style={{ objectFit: "contain", width: 70 }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span>{prod.title}</span>
                  <b>$ {prod.price}</b>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                  -
                </button>
                <span>{prod.qty}</span>
                <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span style={{ padding: 20, alignSelf: "center" }}>Cart is empty</span>
      )}
    </div>
  );
};

export default Cart;
