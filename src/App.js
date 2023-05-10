import React, { useState } from "react";
import Body from "./components/Body";
import Head from "./components/Head";
import Modal from "./components/Modal";
import { Provider } from "./context/Context";

function App() {
  const [M, setModal] = useState(false);

  const modalHandler = (ev) => {
    if (ev) {
      setModal(true);
    }
  };

  const cancelHandler = (ev) => {
    if (ev) {
      setModal(false);
    }
  };

  return (
    <Provider>
      {M && <Modal onCancel={cancelHandler} />}
      <Head onModal={modalHandler} />
      <Body />
    </Provider>
  );
}

export default App;
