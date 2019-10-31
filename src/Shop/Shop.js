import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Modal } from "../Components/Modal";
import { routes } from "../router";

export const Shop = () => {
  const [showModal, setModal] = useState(false);

  const switchShowModal = () => setModal(!showModal);

  return showModal ? (
    <Modal>
      <div className="modal">
        <h3>There is no products now</h3>
        <button onClick={switchShowModal}>
          <Link to={routes.home}>Ok</Link>
        </button>
      </div>
    </Modal>
  ) : (
    <div>
      <h1>Welcome to Shop</h1>
      <button onClick={switchShowModal}>Purchase</button>
    </div>
  );
};
