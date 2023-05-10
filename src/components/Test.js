import React from "react";

function Test() {
  const arr = [];

  const clickHandler = () => {
    arr.push(Math.random());

    console.log(arr.length);
  };

  return (
    <div>
      <button
        style={{ padding: "222px", fontSize: "larger" }}
        onClick={clickHandler}
      >
        OK: {arr.length}
      </button>
    </div>
  );
}

export default Test;
