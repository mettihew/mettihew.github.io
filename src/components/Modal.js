import React, { useContext } from "react";
import MyContext from "../context/Context";
import style from "./Modal.module.css";
import Button from "./Button";
import Mbutton from "./Mbutton";

function Modal(props) {
  const ctx = useContext(MyContext);

  const cancelHandler = (ev) => {
    ev.preventDefault();
    props.onCancel("hide");
  };

  const buyNow = (ev) => {
    ev.preventDefault();
    alert("Congratulation!");
  };

  const dataMap = ctx.newData.map((ev) => (
    <div
      key={ev.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "transparent",
      }}
    >
      <img src={ev.image} width="40px" />
      <p>{ev.name}</p>
      <p>${ev.price}</p>
      <Mbutton id={ev.id} name={ev.name} price={ev.price} image={ev.image} />
      <p>{ev.number}</p>
      <Button id={ev.id} name={ev.name} price={ev.price} image={ev.image} />
    </div>
  ));

  return (
    <div className={style.modal}>
      {dataMap}
      <button onClick={cancelHandler}>Cancel</button>
      <button onClick={buyNow}>Buy Now!</button>
      <p>total amount : ${ctx.amount}</p>
    </div>
  );
}

export default Modal;
