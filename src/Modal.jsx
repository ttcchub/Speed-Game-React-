import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="overlay">
      <div className="modal">
        <h1 className="gover">GAME OVER</h1>
        <p className="final-score">{props.score}</p>
        <p className="game-over-message">{props.message}</p>
        <button className="close-modal button" onClick={props.closeModal}>
          <span className="material-symbols-outlined" class="actual-text">&nbsp;Close&nbsp;</span>
          <span className="material-symbols-outlined" class="hover-text" aria-hidden="true">&nbsp;Close&nbsp;</span>
        </button>

      </div>
    </div>
  );
};

export default Modal;
