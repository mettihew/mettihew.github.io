import React, { useContext } from "react";
import myContext from "../context/Context";

function Head(props) {
  const ctx = useContext(myContext);

  const modalHandler = (ev) => {
    ev.preventDefault();
    props.onModal(true);
  };

  return (
    <div>
      <button
        onClick={modalHandler}
        style={{
          backgroundColor: "darkred",
          padding: "20px",
        }}
      >
        Your Cart : {ctx.newData.length}
      </button>
    </div>
  );
}

export default Head;
