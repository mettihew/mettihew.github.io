import React, { useContext } from "react";
import MyContext from "../context/Context";

function Button(props) {
  const ctx = useContext(MyContext);

  const addToCart = () => {
    ctx.add({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      number: 1,
    });
  };

  return <button onClick={addToCart}>ADD</button>;
}

export default Button;
