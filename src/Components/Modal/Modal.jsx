import React from "react";
import "./modal.scss";

function Modal(props) {
  return (
    <div id="modal-container">
      <div id="modal-content">{props.data.fullName}</div>
      <button className="close-modal" onClick={props.closeModal}>close</button>
    </div>
    
  );
}

export default Modal;
