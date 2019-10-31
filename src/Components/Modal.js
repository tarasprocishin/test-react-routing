import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, modalRoot);
};
