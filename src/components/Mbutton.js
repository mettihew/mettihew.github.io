import React, { useContext } from "react";
import MyContext from "../context/Context";

function Mbutton(props) {
  const ctx = useContext(MyContext);

  const addToCart = () => {
    ctx.delete({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      number: 1,
    });
  };

  return <button onClick={addToCart}>DELETE </button>;
}

export default Mbutton;
