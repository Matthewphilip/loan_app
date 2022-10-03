import React from "react";
import "../styles/modal.css";

const SuccessModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button className="close-button" onClick={props.onConfirm}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SuccessModal;
