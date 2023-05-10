import React, { useState } from "react";
import pizza from "../images/7.jpg";
import salad from "../images/8.jpg";
let amount = 0;
let myId = -1;

const MyContext = React.createContext();

export const Provider = ({ children }) => {
  const [store, setStore] = useState([]);

  const data = [
    { id: "A1", name: "shoe1", price: 100, image: pizza },
    { id: "A2", name: "shoe2", price: 150, image: salad },
  ];

  const addHandler = (ev) => {
    myId = store.findIndex((event) => {
      return event.id === ev.id;
    });
    amount += ev.price * ev.number;

    if (myId === -1) {
      setStore(store.concat({ ...ev }));
    } else {
      store[myId] = { ...ev, number: store[myId].number + 1 };
      setStore(store.splice({ ...ev }));
    }
  };

  const deleteHandler = (ev) => {
    store[myId] = { ...ev, number: store[myId].number - 1 };

    setStore(store.splice({ ...ev }));

    amount -= ev.price * ev.number;
  };

  const ctx2 = {
    data: data,
    newData: store,
    add: addHandler,
    delete: deleteHandler,
    amount: amount,
  };

  return <MyContext.Provider value={ctx2}>{children}</MyContext.Provider>;
};

export default MyContext;
