import React, { useContext } from "react";
import MyContext from "../context/Context";
import Button from "./Button";
import Card from "./Card";

function Body() {
  const ctx = useContext(MyContext);

  const dataMap = ctx.data.map((ev) => (
    <Card key={ev.id}>
      <img
        src={ev.image}
        width="100px"
        height="100px"
        style={{ borderRadius: "50px" }}
      />
      <p>{ev.name}</p>
      <p>${ev.price}</p>
      <p>{ev.amount}</p>
      <Button id={ev.id} name={ev.name} price={ev.price} image={ev.image} />
    </Card>
  ));

  return (
    <div>
      <p>Welcome to Shoe Market</p>
      <p>
        We sell shoes for people on the streets, on the train, on the road and à
        la mode. We strike the balance between style and functionality and
        curate our selection of must-have footwear with our New York customer in
        mind (think shoes that can be hard on the street not hard on the feet).
      </p>
      {dataMap}
    </div>
  );
}

export default Body;
