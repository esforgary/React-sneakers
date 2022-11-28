import React from "react";
import AppContext from "../../context";

export const useCart = () => {
  const {cartItems} = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return {totalPrice};
}