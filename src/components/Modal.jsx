import React from "react";
import "./Modal.css";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="modalOverlay">

      <div className="modalBox">

        <button 
          className="closeBtn"
          onClick={closeModal}
        >
          ×
        </button>

        {children}

      </div>

    </div>
  );
};

export default Modal;